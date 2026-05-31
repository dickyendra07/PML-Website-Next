import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@pharmametriclabs.com';
  const password = 'PmlAdmin123!';
  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.adminUser.upsert({
    where: {
      email,
    },
    update: {
      name: 'PML Admin',
      role: 'SUPER_ADMIN',
      isActive: true,
    },
    create: {
      name: 'PML Admin',
      email,
      passwordHash,
      role: 'SUPER_ADMIN',
      isActive: true,
    },
  });

  console.log('Seeded admin user:', {
    id: admin.id,
    email: admin.email,
    role: admin.role,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
