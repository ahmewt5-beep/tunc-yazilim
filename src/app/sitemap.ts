import { MetadataRoute } from 'next';
import { blogs } from '@/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tuncyazilim.net';

  // Statik Ana Sayfalar
  const staticRoutes = [
    '',
    '/departmanlar/donanim',
    '/departmanlar/yazilim',
    '/departmanlar/mimari',
    '/ar-ge',
    '/sistem-durumu',
    '/blog',
    '/iletisim',
    '/hakkimizda',
    '/kariyer',
    '/kvkk',
    '/gizlilik-politikasi',
    '/kullanim-kosullari',
    '/cerez-politikasi',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dinamik Blog Sayfaları (Tüm 50+ Makale için)
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
