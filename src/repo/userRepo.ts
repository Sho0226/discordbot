import prisma from "../utils/prismaClient"

const userRepository = {
  createUser: async (userData: {
    userName: string;
    userDiscordId: bigint;
    userGithubId?: string;
  }) => {
    return await prisma.users.create({
      data: {
        user_name: userData.userName,
        user_discord_id: userData.userDiscordId,
        user_github_id: userData.userGithubId,
      },
    });
  },
  updateUser: async (
    userId: number,
    userData: {
      userName?: string;
      userDiscordId?: bigint;
      userGithubId?: string;
    },
  ) => {
    return await prisma.users.update({
      where: { user_id: userId },
      data: {
        user_name: userData.userName,
        user_discord_id: userData.userDiscordId,
        user_github_id: userData.userGithubId,
      },
    });
  },

  findUserById: async (userId: number) => {
    return await prisma.users.findUnique({
      where: { user_id: userId },
    });
  },

  findUserByDiscordId: async (userDiscordId: bigint) => {
    return await prisma.users.findFirst({
      where: { user_discord_id: userDiscordId },
    });
  },
  findAllUsers: async () => {
    return await prisma.users.findMany();
  },

  deleteUser: async (userId: number) => {
    return await prisma.users.delete({
      where: { user_id: userId },
    });
  },
};

export default userRepository;
