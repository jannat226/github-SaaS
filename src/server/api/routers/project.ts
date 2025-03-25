import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
  } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
    createProject: publicProcedure.input().mutation(async ({ ctx,input }) => {
            console.log(ctx);  
            return true;
        }),
});
