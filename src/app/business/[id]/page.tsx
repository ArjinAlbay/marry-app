'use client';

import { Container, Title, Card, Text, Group, Badge, Button, Stack, Box, Image, Grid, Divider } from '@mantine/core';
import { IconStar, IconMapPin, IconPhone, IconClock, IconUsers, IconArrowLeft, IconHeart } from '@tabler/icons-react';
import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { businesses } from '@/data/mockData';

export default function BusinessDetailPage() {
  const params = useParams();
  const businessId = params.id as string;
  const business = businesses.find(b => b.id === businessId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  if (!business) {
    return (
      <Container size="sm" p="md">
        <Text>İşletme bulunamadı</Text>
      </Container>
    );
  }

  return (
    <>
      {/* Header */}
      <Box p="md" style={{ background: 'linear-gradient(135deg, #ff6b9d, #ffa726)', color: 'white' }}>
        <Group justify="space-between" align="center">
          <Link href="/appointments" style={{ textDecoration: 'none', color: 'white' }}>
            <Group gap="xs">
              <IconArrowLeft size={20} />
              <Text size="sm">Geri</Text>
            </Group>
          </Link>
          <Badge variant="light" color="rgba(255,255,255,0.2)" c="white">
            {business.category}
          </Badge>
        </Group>
      </Box>

      <Container size="sm" p="md" pb="100px">
        {/* Image Gallery */}
        <Card shadow="sm" padding="lg" radius="lg" withBorder mb="md">
          <Image
            src={business.gallery[selectedImage]}
            alt={business.name}
            height={250}
            radius="md"
            mb="md"
          />
          <Group gap="xs" justify="center">
            {business.gallery.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${business.name} ${index + 1}`}
                width={60}
                height={45}
                radius="sm"
                style={{
                  cursor: 'pointer',
                  border: selectedImage === index ? '2px solid #ff6b9d' : '1px solid #e9ecef'
                }}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </Group>
        </Card>

        {/* Business Info */}
        <Card shadow="sm" padding="lg" radius="lg" withBorder mb="md">
          <Group justify="space-between" mb="xs">
            <Title order={2}>{business.name}</Title>
            <IconHeart size={24} color="#ddd" style={{ cursor: 'pointer' }} />
          </Group>

          <Group mb="md">
            <Group gap="xs">
              <IconStar size={16} style={{ color: '#ffd43b' }} />
              <Text size="sm" fw={500}>{business.rating}</Text>
            </Group>
            <Text size="sm" c="dimmed">•</Text>
            <Text size="sm" fw={500} c="green">{business.price}</Text>
          </Group>

          <Text size="sm" c="dimmed" mb="md">{business.description}</Text>

          <Stack gap="sm">
            <Group gap="xs">
              <IconMapPin size={16} style={{ color: '#868e96' }} />
              <Text size="sm">{business.address}</Text>
            </Group>
            <Group gap="xs">
              <IconPhone size={16} style={{ color: '#868e96' }} />
              <Text size="sm">{business.phone}</Text>
            </Group>
            <Group gap="xs">
              <IconClock size={16} style={{ color: '#868e96' }} />
              <Text size="sm">{business.workingHours}</Text>
            </Group>
            {business.capacity && (
              <Group gap="xs">
                <IconUsers size={16} style={{ color: '#868e96' }} />
                <Text size="sm">{business.capacity} kişi kapasiteli</Text>
              </Group>
            )}
          </Stack>
        </Card>

        {/* Features */}
        <Card shadow="sm" padding="lg" radius="lg" withBorder mb="md">
          <Title order={4} mb="md">Özellikler</Title>
          <Grid>
            {business.features.map((feature, index) => (
              <Grid.Col span={6} key={index}>
                <Badge variant="light" color="blue" size="sm" fullWidth>
                  {feature}
                </Badge>
              </Grid.Col>
            ))}
          </Grid>
        </Card>

        {/* Packages */}
        {business.packages && business.packages.length > 0 && (
          <Card shadow="sm" padding="lg" radius="lg" withBorder mb="md">
            <Group justify="space-between" mb="md">
              <Title order={4}>Paketler & Kampanyalar</Title>
              {business.hasPromotions && (
                <Badge color="red" variant="filled" size="sm">
                  Kampanyalı!
                </Badge>
              )}
            </Group>
            
            <Stack gap="md">
              {business.packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  padding="md"
                  radius="md"
                  withBorder
                  style={{
                    border: selectedPackage === pkg.id ? '2px solid #ff6b9d' : '1px solid #e9ecef',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id)}
                >
                  <Group justify="space-between" mb="xs">
                    <Text fw={500}>{pkg.name}</Text>
                    <Group gap="xs">
                      {pkg.originalPrice && (
                        <Text size="sm" td="line-through" c="dimmed">
                          ₺{pkg.originalPrice.toLocaleString()}
                        </Text>
                      )}
                      <Text fw={600} c="green">₺{pkg.price.toLocaleString()}</Text>
                    </Group>
                  </Group>
                  <Text size="sm" c="dimmed" mb="xs">{pkg.description}</Text>
                  <Text size="xs" c="dimmed" mb="sm">Süre: {pkg.duration}</Text>
                  
                  {selectedPackage === pkg.id && (
                    <Stack gap="xs">
                      <Divider />
                      <Text size="sm" fw={500}>Dahil olan hizmetler:</Text>
                      {pkg.includes.map((item, index) => (
                        <Text key={index} size="sm" c="dimmed">• {item}</Text>
                      ))}
                    </Stack>
                  )}
                </Card>
              ))}
            </Stack>
          </Card>
        )}

        {/* Available Times */}
        <Card shadow="sm" padding="lg" radius="lg" withBorder mb="md">
          <Title order={4} mb="md">Uygun Saatler</Title>
          <Group>
            {business.availableSlots.map((slot) => (
              <Badge
                key={slot}
                variant="outline"
                size="md"
                color="blue"
                style={{ cursor: 'pointer' }}
              >
                {slot}
              </Badge>
            ))}
          </Group>
        </Card>

        {/* Action Buttons */}
        <Group gap="md">
          <Button
            variant="outline"
            flex={1}
            size="md"
            radius="lg"
            color="blue"
          >
            Telefon Et
          </Button>
          <Button
            flex={2}
            size="md"
            radius="lg"
            style={{
              background: 'linear-gradient(135deg, #ff6b9d, #ffa726)',
              border: 'none'
            }}
          >
            Randevu Al
          </Button>
        </Group>
      </Container>
    </>
  );
}