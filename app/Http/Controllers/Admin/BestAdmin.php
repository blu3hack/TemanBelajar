<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BestAdmin extends Controller
{
    public function BestAdmin() {
        $mentors = DB::table('data_active_mentor_tables')->get();
        $students = DB::table('data_active_student_tables')->get();
        $explore_class = DB::table('explore_class')->get();
        $payment = DB::table('main_transaction_payment')->get();

        $balance = DB::select("SELECT
            mtp.classroom_id AS classroom_id,
            mtp.mentor AS mentor,
            mtp.title AS title,
            ec.level AS level,
            mtp.amount AS amount,
            COUNT(*) AS total_transaksi,
            0.2 AS cosh_platform,
            5000 AS admin_midtrans,

            CASE
                WHEN ec.level = 'private' THEN
                    (mtp.amount - (mtp.amount * 0.2)) * COUNT(*)
                WHEN ec.level = 'group' AND COUNT(*) > 1 THEN
                    (mtp.amount + (mtp.amount * 0.05 * COUNT(*)))
                WHEN ec.level = 'group' AND COUNT(*) = 1 THEN
                    mtp.amount - (mtp.amount * 0.2)
                WHEN ec.level = 'workshop' AND COUNT(*) > 1 THEN
                    (mtp.amount + (mtp.amount * 0.2 * COUNT(*)))
                WHEN ec.level = 'workshop' AND COUNT(*) = 1 THEN
                    mtp.amount - (mtp.amount * 0.2)
                ELSE 0
            END AS pendapatan_mentor,

            (mtp.amount - 5000) * COUNT(*) AS bruto_platform,

            (mtp.amount - 5000) * COUNT(*) - (
                CASE
                    WHEN ec.level = 'private' THEN
                        (mtp.amount - (mtp.amount * 0.2)) * COUNT(*)
                    WHEN ec.level = 'group' AND COUNT(*) > 1 THEN
                        (mtp.amount + (mtp.amount * 0.05 * COUNT(*)))
                    WHEN ec.level = 'group' AND COUNT(*) = 1 THEN
                        mtp.amount - (mtp.amount * 0.2)
                    WHEN ec.level = 'workshop' AND COUNT(*) > 1 THEN
                        (mtp.amount + (mtp.amount * 0.2 * COUNT(*)))
                    WHEN ec.level = 'workshop' AND COUNT(*) = 1 THEN
                        mtp.amount - (mtp.amount * 0.2)
                    ELSE 0
                END
            ) AS netto_platform

        FROM main_transaction_payment mtp
        LEFT JOIN explore_class ec ON ec.classroom_id = mtp.classroom_id
        GROUP BY
            mtp.classroom_id,
            mtp.mentor,
            mtp.title,
            mtp.amount,
            ec.level
        ");

        return Inertia::render('Admin/BestAdmin', [
            'mentors' => $mentors,
            'students' => $students,
            'explore_class' => $explore_class,
            'payment' => $payment,
            'balance' => $balance,
        ]);
    }

    public function UpdateMentorStatus(Request $request, $id) {
        $status = $request->status;
        DB::table('data_active_mentor_tables')
        ->where('id', $id)
        ->update([
            'status' => $status,
        ]);
    }

    public function UpdateImageClass(Request $request, $classID) {
        $imageLink = $request->pamflet;
        DB::table('explore_class')
        ->where('id', $classID)
        ->update([
            'image' => $imageLink,
            'status' => "post",
        ]);
    }
}
