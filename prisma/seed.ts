import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import 'dotenv/config';

// Initialize MariaDB/MySQL Driver Adapter for Prisma 7
const connectionString = process.env.DATABASE_URL || 'mysql://root:password@localhost:3306/supercomputing_db';
const adapter = new PrismaMariaDb(connectionString);
const prisma = new PrismaClient({ adapter });

async function main() {
  const categories = [
    {
      name: 'High Performance Computing',
      slug: 'hpc',
      icon: 'Server',
      description: 'Parallel computing, CUDA, OpenMP, MPI, and hardware optimization.',
    },
    {
      name: 'AI & Machine Learning',
      slug: 'ai',
      icon: 'Sparkles',
      description: 'Deep learning infrastructure, PyTorch, LLM scaling, and neural networks.',
    },
    {
      name: 'Data Science & Big Data',
      slug: 'ds',
      icon: 'Cpu',
      description: 'Distributed data pipelines, Spark, analytics, and data engineering.',
    },
    {
      name: 'Competitive Programming',
      slug: 'cp',
      icon: 'Terminal',
      description: 'Algorithmic efficiency, data structures, and contest problems.',
    },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }

  console.log('✅ Categories successfully seeded into MySQL!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });