import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
  } from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
    createProject: protectedProcedure.input(
        z.object({
            name : z.string(),
            githubUrl: z.string(),
            githubToken : z.string().optional()

        })
    ).mutation(async ({ ctx,input }) => {
        console.log('input',input);
        ctx.session?.user.id,
            console.log(ctx);  
            return true;
        }),
});
