import { PrismaClient, PublishStatus } from '@prisma/client';

const prisma = new PrismaClient();

const insights = [
  {
    title: 'Preparing a Successful BA/BE Study Submission',
    slug: 'preparing-successful-babe-study-submission',
    excerpt:
      'Key considerations for sponsors before starting bioavailability and bioequivalence study discussions with PML.',
    content:
      'A successful BA/BE study starts with complete product information, clear regulatory objectives, suitable study design, and aligned timelines between sponsor and CRO.',
    category: 'articles',
    coverImage: '/images/pml/services/babe-studies-hero.png',
    tags: ['BA/BE', 'CRO', 'Regulatory'],
    status: PublishStatus.PUBLISHED,
    isFeatured: true,
    publishedAt: new Date(),
  },
  {
    title: 'PML Clinical Trial Support for Pharmaceutical Development',
    slug: 'pml-clinical-trial-support',
    excerpt:
      'Overview of clinical trial support, operational coordination, and study readiness for pharmaceutical sponsors.',
    content:
      'PML supports clinical trial preparation through study planning, operational coordination, documentation support, and collaboration with relevant clinical partners.',
    category: 'articles',
    coverImage: '/images/pml/services/clinical-trial-hero.png',
    tags: ['Clinical Trial', 'Pharmaceutical Development'],
    status: PublishStatus.PUBLISHED,
    isFeatured: false,
    publishedAt: new Date(),
  },
  {
    title: 'Analytical Testing Capability for Product Quality Support',
    slug: 'analytical-testing-capability-product-quality',
    excerpt:
      'How contract analysis services support pharmaceutical, cosmetic, food, beverage, and medical device quality requirements.',
    content:
      'Analytical testing helps sponsors evaluate product quality, documentation readiness, and compliance needs across different product categories.',
    category: 'publications',
    coverImage: '/images/pml/facilities-gallery/analytical-main.jpg',
    tags: ['Contract Analysis', 'Laboratory'],
    status: PublishStatus.PUBLISHED,
    isFeatured: false,
    publishedAt: new Date(),
  },
  {
    title: 'PML Facility and Service Updates',
    slug: 'pml-facility-and-service-updates',
    excerpt:
      'Latest updates related to Pharma Metric Labs facilities, service capabilities, and collaboration readiness.',
    content:
      'PML continues to support pharmaceutical development through integrated clinical, analytical, and regulatory capabilities.',
    category: 'news',
    coverImage: '/images/pml/cta-lab-background.png',
    tags: ['News', 'Facility'],
    status: PublishStatus.PUBLISHED,
    isFeatured: false,
    publishedAt: new Date(),
  },
  {
    title: 'What information should sponsors prepare before contacting PML?',
    slug: 'what-information-should-sponsors-prepare',
    excerpt:
      'Sponsors should prepare product details, service needs, project objectives, expected timeline, and available documents.',
    content:
      'Before contacting PML, sponsors can prepare product information, target service scope, regulatory objective, available documents, and expected project timeline.',
    category: 'faq',
    coverImage: '/images/pml/facilities-gallery/clinical-main.jpg',
    tags: ['FAQ'],
    status: PublishStatus.PUBLISHED,
    isFeatured: false,
    publishedAt: new Date(),
  },
];

async function main() {
  for (const insight of insights) {
    const item = await prisma.insightPost.upsert({
      where: {
        slug: insight.slug,
      },
      update: insight,
      create: insight,
    });

    console.log(`✅ Insight seeded: ${item.title}`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    void prisma.$disconnect();
  });
