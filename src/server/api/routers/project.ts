// import { z } from "zod";

// import {
//     createTRPCRouter,
//     protectedProcedure,
//     publicProcedure,
//   } from "~/server/api/trpc";

// export const projectRouter = createTRPCRouter({
//     createProject: protectedProcedure.input(
//         z.object({
//             name : z.string(),
//             githubUrl: z.string(),
//             githubToken : z.string().optional()

//         })
//     ).mutation(async ({ ctx,input }) => {
//         console.log('input',input);
//         ctx.session?.user.id,
//             console.log(ctx);  
//             return true;
//         }),
// });
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  createProject: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        githubUrl: z.string().url(),
        githubToken: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Ensure session exists and log user info
      if (!ctx.session?.user) {
        throw new Error("User is not authenticated.");
      }

      // Accessing the user ID from the session
      const userId = ctx.session.user.id;
      console.log("User ID from session:", userId);

      // Creating the project in the database
      const project = await ctx.db.project.create({
        data: {
          name: input.name,
          githubUrl: input.githubUrl,
          githubToken: input.githubToken,
          userId, // Associating the project with the logged-in user
        },
      });

      return project; // Return the created project
    }),
});
