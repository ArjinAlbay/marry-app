'use client';

import { Container, Title, Grid, Card, Text, Button, Group, Stack, Box, Avatar, Badge, Progress, ActionIcon } from '@mantine/core';
import { IconCalendarTime, IconDiscount2, IconMapPin, IconBell, IconSettings, IconTrendingUp, IconHeart, IconGift, IconStar, IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

export default function HomePage() {
  const quickActions = [
    { icon: IconCalendarTime, label: 'Randevu', color: '#ff6b9d', href: '/appointments' },
    { icon: IconDiscount2, label: 'Kampanya', color: '#4ecdc4', href: '/campaigns' },
    { icon: IconHeart, label: 'Favoriler', color: '#ff8a80', href: '/favorites' },
    { icon: IconGift, label: 'Hediye', color: '#9c88ff', href: '/gifts' }
  ];

  const trendingServices = [
    { name: 'Gelin Saçı & Makyaj', discount: '25%', image: '👰‍♀️' },
    { name: 'Düğün Salonu', discount: '15%', image: '🏛️' },
    { name: 'Gelinlik', discount: '30%', image: '👗' }
  ];

  const recentActivity = [
    { action: 'Prenses Gelinlik\'i favorilere ekledi', time: '2 saat önce', icon: '❤️' },
    { action: 'Kasr-ı Düğün Salonu fiyat takip', time: '1 gün önce', icon: '📊' }
  ];

  return (
    <>
      {/* Status Bar Style Header */}
      <Box style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '8px 16px' }}>
        <Group justify="space-between" align="center">
          <Group gap="xs">
            <Box w={8} h={8} style={{ background: '#4ade80', borderRadius: '50%' }} />
            <Text size="xs" fw={500}>Çevrimiçi</Text>
          </Group>
          <Group gap="sm">
            <ActionIcon variant="subtle" color="white" size="sm">
              <IconBell size={16} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="white" size="sm">
              <IconSettings size={16} />
            </ActionIcon>
          </Group>
        </Group>
      </Box>

      {/* Main Header */}
      <Box p="lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <Group justify="space-between" align="center" mb="md">
          <Group>
            <Avatar 
              size="lg" 
              radius="xl" 
              style={{ background: 'rgba(255,255,255,0.2)' }}
            >
              👰‍♀️
            </Avatar>
            <Box>
              <Text size="sm" opacity={0.9}>Merhaba!</Text>
              <Title order={2} c="white">Ayşe & Mehmet</Title>
              <Group gap="xs" mt={2}>
                <IconMapPin size={14} />
                <Text size="xs" opacity={0.8}>Diyarbakır</Text>
              </Group>
            </Box>
          </Group>
          <Badge 
            size="lg" 
            variant="light" 
            color="rgba(255,255,255,0.3)" 
            c="white"
            style={{ padding: '8px 12px' }}
          >
            142 gün kaldı! 💒
          </Badge>
        </Group>

        {/* Wedding Progress */}
        <Card radius="lg" style={{ background: 'rgba(255,255,255,0.15)', border: 'none' }} p="md">
          <Group justify="space-between" mb="xs">
            <Text c="white" size="sm" fw={500}>Düğün Hazırlığı</Text>
            <Text c="white" size="sm">68%</Text>
          </Group>
          <Progress 
            value={68} 
            size="md" 
            radius="xl"
            styles={{
              section: {
                background: 'linear-gradient(90deg, #ffd700, #ff6b9d)'
              }
            }}
          />
          <Text c="white" size="xs" mt="xs" opacity={0.8}>
            Tamamlanan görevler: 8/12
          </Text>
        </Card>
      </Box>

      <Container size="sm" p="lg" pb="100px">
        {/* Quick Actions */}
        <Title order={3} mb="md" c="dark">Hızlı İşlemler</Title>
        <Grid mb="xl">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Grid.Col span={3} key={index}>
                <Link href={action.href} style={{ textDecoration: 'none' }}>
                  <Stack align="center" gap="xs" style={{ cursor: 'pointer' }}>
                    <Box
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: '18px',
                        background: `linear-gradient(135deg, ${action.color}, ${action.color}dd)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s ease'
                      }}
                      className="quick-action"
                    >
                      <Icon size={24} color="white" />
                    </Box>
                    <Text size="xs" fw={500} ta="center" c="dark">
                      {action.label}
                    </Text>
                  </Stack>
                </Link>
              </Grid.Col>
            );
          })}
        </Grid>

        {/* Trending Now */}
        <Group justify="space-between" mb="md">
          <Group gap="xs">
            <IconTrendingUp size={20} color="#ff6b9d" />
            <Title order={4} c="dark">Popüler Bu Hafta</Title>
          </Group>
          <Text size="sm" c="dimmed" style={{ cursor: 'pointer' }}>Tümünü Gör</Text>
        </Group>

        <Stack gap="sm" mb="xl">
          {trendingServices.map((service, index) => (
            <Card key={index} shadow="sm" padding="md" radius="lg" withBorder>
              <Group justify="space-between">
                <Group>
                  <Text size="xl">{service.image}</Text>
                  <Box>
                    <Text fw={500} size="sm">{service.name}</Text>
                    <Text size="xs" c="dimmed">Çok aranan hizmet</Text>
                  </Box>
                </Group>
                <Group gap="xs">
                  <Badge color="red" variant="filled" size="sm">
                    %{service.discount} İndirim
                  </Badge>
                  <ActionIcon variant="subtle" color="gray">
                    <IconArrowRight size={16} />
                  </ActionIcon>
                </Group>
              </Group>
            </Card>
          ))}
        </Stack>

        {/* Main Actions */}
        <Stack gap="md" mb="xl">
          <Link href="/appointments" style={{ textDecoration: 'none' }}>
            <Card 
              shadow="lg" 
              padding="xl" 
              radius="xl" 
              style={{ 
                background: 'linear-gradient(135deg, #ff6b9d, #ffa726)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              className="main-card"
            >
              <Group justify="space-between" align="flex-start">
                <Box style={{ color: 'white' }}>
                  <Group mb="sm">
                    <IconCalendarTime size={28} />
                    <Badge variant="light" color="rgba(255,255,255,0.3)" c="white">
                      Yeni!
                    </Badge>
                  </Group>
                  <Title order={3} c="white" mb="xs">Randevu Sistemi</Title>
                  <Text size="sm" opacity={0.9} mb="md">
                    AI destekli randevu önerilerle zamanınızı en iyi şekilde planlayın
                  </Text>
                  <Button 
                    variant="white" 
                    color="dark" 
                    size="sm" 
                    radius="xl"
                    fw={600}
                  >
                    Randevu Al →
                  </Button>
                </Box>
              </Group>
            </Card>
          </Link>

          <Link href="/campaigns" style={{ textDecoration: 'none' }}>
            <Card 
              shadow="lg" 
              padding="xl" 
              radius="xl" 
              style={{ 
                background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              className="main-card"
            >
              <Group justify="space-between" align="flex-start">
                <Box style={{ color: 'white' }}>
                  <Group mb="sm">
                    <IconDiscount2 size={28} />
                    <Badge variant="light" color="rgba(255,255,255,0.3)" c="white">
                      🔥 Hot
                    </Badge>
                  </Group>
                  <Title order={3} c="white" mb="xs">Özel Kampanyalar</Title>
                  <Text size="sm" opacity={0.9} mb="md">
                    Düğün bütçenizi %40a varan indirimlerle optimize edin
                  </Text>
                  <Button 
                    variant="white" 
                    color="dark" 
                    size="sm" 
                    radius="xl"
                    fw={600}
                  >
                    Fırsatları Keşfet →
                  </Button>
                </Box>
              </Group>
            </Card>
          </Link>
        </Stack>

        {/* Stats Cards */}
        <Title order={4} mb="md" c="dark">Düğün İstatistiklerin</Title>
        <Grid mb="xl">
          <Grid.Col span={4}>
            <Card shadow="sm" padding="md" radius="lg" withBorder ta="center">
              <IconStar size={24} color="#ffd700" style={{ marginBottom: 8 }} />
              <Text size="xl" fw={700} c="pink">4.8</Text>
              <Text size="xs" c="dimmed">Ortalama Puan</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="md" radius="lg" withBorder ta="center">
              <Text size="xl" style={{ marginBottom: 8 }}>💰</Text>
              <Text size="xl" fw={700} c="green">₺18K</Text>
              <Text size="xs" c="dimmed">Tasarruf</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="md" radius="lg" withBorder ta="center">
              <Text size="xl" style={{ marginBottom: 8 }}>📅</Text>
              <Text size="xl" fw={700} c="blue">12</Text>
              <Text size="xs" c="dimmed">Randevu</Text>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Recent Activity */}
        <Group justify="space-between" mb="md">
          <Title order={4} c="dark">Son Aktiviteler</Title>
          <Text size="sm" c="dimmed" style={{ cursor: 'pointer' }}>Tümü</Text>
        </Group>
        <Stack gap="xs">
          {recentActivity.map((activity, index) => (
            <Card key={index} shadow="xs" padding="sm" radius="md" withBorder>
              <Group gap="sm">
                <Text size="sm">{activity.icon}</Text>
                <Box flex={1}>
                  <Text size="sm" c="dark">{activity.action}</Text>
                  <Text size="xs" c="dimmed">{activity.time}</Text>
                </Box>
              </Group>
            </Card>
          ))}
        </Stack>
      </Container>

      <style jsx>{`
        .quick-action:hover {
          transform: translateY(-2px);
        }
        .main-card:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </>
  );
}