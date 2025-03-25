'use client'

import React from 'react'
import {useForm} from 'react-hook-form'
import { Input } from "~/components/ui/input"; 
import { Button ,} from '~/components/ui/button';


type FormInput = {
    repoUrl: string;
    projectName: string;
    githubToken?: string;
}
const CreatePage = () => { 
    const {register, handleSubmit} =  useForm<FormInput>()
    function onSubmit(data: FormInput){
        window.alert(JSON.stringify(data,null,2))
        return true
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
                    <Input  {...register('repoUrl',{required:true})}placeholder='Github url' required/>           
              
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
