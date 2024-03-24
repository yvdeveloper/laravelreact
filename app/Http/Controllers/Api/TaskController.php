<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Resources\TaskResource;
use Illuminate\Foundation\Http\FormRequest;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return TaskResource::collection(
            Task::select('tasks.*','a.name as created_by')->leftJoin('users as a','tasks.created_by','=','a.id')->where('tasks.is_deleted',0)->orderBy('tasks.id','desc')->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        $data = $request->validated();
        $user = Task::create($data);
        return response(true,201);
    }

    public function show(Task $task)
    {
        return new TaskResource($task);
    }

    

    /**
     * Update the specified resource in storage.
     */
    public function update(FormRequest $request, Task $task)
    {
        //
        $task->status = $request->status;
        $task->save();
        return response("",201);
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->is_deleted = 1;
        $task->save();
        return response(true,201);
    }
}
