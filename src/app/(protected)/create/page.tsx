'use client'

import React from 'react'
import {useForm} from 'react-hook-form'
import { Input } from "~/components/ui/input"; 
import { Button ,} from '~/components/ui/button';
import { api } from '~/trpc/react';
import { toNamespacedPath } from 'path';
import { toast } from 'react-hot-toast'; // Ensure toast is imported


type FormInput = {
    repoUrl: string;
    projectName: string;
    githubToken?: string;
}
const CreatePage = (data:FormInput) => { 
    const {register,reset, handleSubmit} =  useForm<FormInput>()
    // const createProject = api.project.createProject.useMutation()
    // function onSubmit(data: FormInput){
    //     window.alert(JSON.stringify(data,null,2))
    //     createProject.mutate({
    //             githubUrl: data.repoUrl,
    //         name: data.projectName,
    //         githubToken: data.githubToken
    //     },{
    //         onSuccess:()=>{
    //             toast.success('Project created successfully')
    //             reset()
    //         },
    //         onError:(error)=>{
    //             toast.error('Error creating project')    
    //         }})
                
    //     return true
    //  }
    const createProject = api.project.createProject.useMutation();

async function onSubmit(data: FormInput) {
    try {
        // If you still want to debug the data:
        console.log(data); // Better alternative to window.alert

        // Perform the mutation
        await createProject.mutateAsync({
            githubUrl: data.repoUrl,
            name: data.projectName,
            githubToken: data.githubToken,
        });

        // On success
        toast.success('Project created successfully');
        reset();
    } catch (error) {
        // Log the error to the console
        console.error('Error creating project:', error);
        toast.error('Error creating project');
    }
}
     
        
    
    
    
  return (
    <div className='flex justify-center items-center h-full gap-2'>
        <img src="/undraw_github.svg" alt="github" className='w-20'/>      
        <div>
            <div>
                <h1 className='text-2xl font-semibold'>Link your Github repository</h1>
                <p className='text-sm text-muted-foreground'>Enter the  repository URL to link to CodeSync</p>
            </div>
            <div className='h-2'>
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* <Input  {...register('name',{required:true})}placeholder='enter Name' required/>  */}
                <div className="h2"></div>
                    <Input  {...register('repoUrl',{required:true})}placeholder='Github url' required/>           
              <div className="h2"></div>
                    <Input  {...register('githubToken')}placeholder='Github Token(optional)' required/>                
              
                <div className='h-4'>
                    <Button type='submit'>Create Project</Button>
                
                </div>
            </form> 
            </div>
        </div>
    </div>
  )
}

export default CreatePage
