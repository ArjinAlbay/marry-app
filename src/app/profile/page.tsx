'use client';

import { Container, Title, Card, Text, Group, Badge, Button, Stack, Box, Avatar, Progress, Grid, Divider, Switch, ActionIcon, Modal, TextInput, Select } from '@mantine/core';
import { IconSettings, IconBell, IconHeart, IconCalendarTime, IconMapPin, IconPhone, IconMail, IconEdit, IconLogout, IconShield, IconQuestionMark, IconShare, IconCrown, IconGift, IconTrendingUp, IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';

export default function ProfilePage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [notifications, setNotifications] = useState({
    appointments: true,
    campaigns: true,
    priceDrops: false,
    newBusinesses: true
  });

  const userStats = [
    { label: 'Favori İşletme', value: '12', icon: '❤️', color: 'red' },
    { label: 'Tamamlanan Randevu', value: '8', icon: '✅', color: 'green' },
    { label: 'Toplam Tasarruf', value: '₺18.5K', icon: '💰', color: 'yellow' },
    { label: 'Takip Edilen Fiyat', value: '24', icon: '📊', color: 'blue' }
  ];

  const recentAppointments = [
    { business: 'Güzel Kuaför Salonu', date: '15 Mart 2025', status: 'completed', service: 'Gelin Saçı Denemesi' },
    { business: 'Prenses Gelinlik', date: '22 Mart 2025', status: 'upcoming', service: 'Gelinlik Provas?' },
    { business: 'Kasr-ı Düğün Salonu', date: '28 Mart 2025', status: 'upcoming', service: 'Salon Gezisi' }
  ];

  const menuItems = [
    { icon: IconCalendarTime, label: 'Randevularım', count: '3', color: '#ff6b9d' },
    { icon: IconHeart, label: 'Favorilerim', count: '12', color: '#ff8a80' },
    { icon: IconGift, label: 'Hediye Kuponlarım', count: '2', color: '#9c88ff' },
    { icon: IconTrendingUp, label: 'Fiyat Takiplerim', count: '24', color: '#4ecdc4' },
    { icon: IconBell, label: 'Bildirim Ayarları', count: '', color: '#ffa726' },
    { icon: IconShield, label: 'Gizlilik', count: '', color: '#66bb6a' },
    { icon: IconQuestionMark, label: 'Yardım & Destek', count: '', color: '#42a5f5' }
  ];

  return (
    <>
      {/* Header */}
      <Box p="md" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <Group justify="space-between" align="center" mb="md">
          <Title order={2} c="white">Profilim</Title>
          <Group gap="sm">
            <ActionIcon variant="subtle" color="white" onClick={() => setShowEditModal(true)}>
              <IconEdit size={20} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="white">
              <IconShare size={20} />
            </ActionIcon>
          </Group>
        </Group>

        {/* User Info Card */}
        <Card radius="lg" style={{ background: 'rgba(255,255,255,0.15)', border: 'none' }} p="lg">
          <Group mb="md">
            <Avatar 
              size={80} 
              radius="xl" 
              style={{ background: 'linear-gradient(135deg, #ffd700, #ff6b9d)' }}
            >
              👰‍♀️
            </Avatar>
            <Box flex={1}>
              <Group gap="xs" mb="xs">
                <Text c="white" size="xl" fw={600}>Ayşe & Mehmet</Text>
                <IconCrown size={20} color="#ffd700" />
              </Group>
              <Text c="white" size="sm" opacity={0.9} mb="xs">Premium Üye</Text>
              <Group gap="xs">
                <IconMapPin size={14} />
                <Text c="white" size="sm" opacity={0.8}>Diyarbakır, Türkiye</Text>
              </Group>
              <Group gap="xs" mt="xs">
                <IconCalendarTime size={14} />
                <Text c="white" size="sm" opacity={0.8}>Düğün: 12 Haziran 2025</Text>
              </Group>
            </Box>
          </Group>

          {/* Wedding Countdown */}
          <Group justify="space-between" mb="xs">
            <Text c="white" size="sm" fw={500}>Düğüne Kalan Süre</Text>
            <Text c="white" size="sm">142 gün</Text>
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
        </Card>
      </Box>

      <Container size="sm" p="md" pb="100px">
        {/* Stats Grid */}
        <Grid mb="xl">
          {userStats.map((stat, index) => (
            <Grid.Col span={6} key={index}>
              <Card shadow="sm" padding="md" radius="lg" withBorder ta="center">
                <Text size="xl" mb="xs">{stat.icon}</Text>
                <Text size="lg" fw={700} c={stat.color}>{stat.value}</Text>
                <Text size="xs" c="dimmed">{stat.label}</Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        {/* Recent Appointments */}
        <Title order={4} mb="md" c="dark">Son Randevular</Title>
        <Stack gap="sm" mb="xl">
          {recentAppointments.map((appointment, index) => (
            <Card key={index} shadow="xs" padding="md" radius="lg" withBorder>
              <Group justify="space-between">
                <Box>
                  <Text fw={500} size="sm">{appointment.business}</Text>
                  <Text size="xs" c="dimmed">{appointment.service}</Text>
                  <Text size="xs" c="dimmed">{appointment.date}</Text>
                </Box>
                <Badge 
                  color={appointment.status === 'completed' ? 'green' : 'blue'} 
                  variant="light" 
                  size="sm"
                >
                  {appointment.status === 'completed' ? 'Tamamlandı' : 'Yaklaşan'}
                </Badge>
              </Group>
            </Card>
          ))}
        </Stack>

        {/* Menu Items */}
        <Title order={4} mb="md" c="dark">Hesap Ayarları</Title>
        <Stack gap="xs">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} shadow="xs" padding="md" radius="lg" withBorder style={{ cursor: 'pointer' }}>
                <Group justify="space-between">
                  <Group>
                    <Box
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '12px',
                        background: `${item.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={20} color={item.color} />
                    </Box>
                    <Box>
                      <Text fw={500} size="sm">{item.label}</Text>
                      {item.count && (
                        <Text size="xs" c="dimmed">{item.count} öğe</Text>
                      )}
                    </Box>
                  </Group>
                  <Group gap="xs">
                    {item.count && (
                      <Badge variant="light" color="gray" size="sm">
                        {item.count}
                      </Badge>
                    )}
                    <IconChevronRight size={16} color="gray" />
                  </Group>
                </Group>
              </Card>
            );
          })}
        </Stack>

        <Divider my="xl" />

        {/* Quick Settings */}
        <Title order={4} mb="md" c="dark">Hızlı Ayarlar</Title>
        <Stack gap="md">
          <Group justify="space-between">
            <Group>
              <IconBell size={20} color="#ffa726" />
              <Box>
                <Text size="sm" fw={500}>Randevu Bildirimleri</Text>
                <Text size="xs" c="dimmed">Yaklaşan randevularınız için bildirim</Text>
              </Box>
            </Group>
            <Switch 
              checked={notifications.appointments}
              onChange={(e) => setNotifications({...notifications, appointments: e.currentTarget.checked})}
            />
          </Group>

          <Group justify="space-between">
            <Group>
              <IconGift size={20} color="#9c88ff" />
              <Box>
                <Text size="sm" fw={500}>Kampanya Bildirimleri</Text>
                <Text size="xs" c="dimmed">Yeni kampanyalar ve fırsatlar</Text>
              </Box>
            </Group>
            <Switch 
              checked={notifications.campaigns}
              onChange={(e) => setNotifications({...notifications, campaigns: e.currentTarget.checked})}
            />
          </Group>

          <Group justify="space-between">
            <Group>
              <IconTrendingUp size={20} color="#4ecdc4" />
              <Box>
                <Text size="sm" fw={500}>Fiyat Düşüş Bildirimleri</Text>
                <Text size="xs" c="dimmed">Takip ettiğiniz ürünlerde fiyat değişiklikleri</Text>
              </Box>
            </Group>
            <Switch 
              checked={notifications.priceDrops}
              onChange={(e) => setNotifications({...notifications, priceDrops: e.currentTarget.checked})}
            />
          </Group>
        </Stack>

        <Divider my="xl" />

        {/* Logout Button */}
        <Button 
          variant="outline" 
          color="red" 
          size="md" 
          fullWidth 
          leftSection={<IconLogout size={16} />}
          radius="lg"
        >
          Çıkış Yap
        </Button>
      </Container>

      {/* Edit Profile Modal */}
      <Modal
        opened={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Profili Düzenle"
        centered
      >
        <Stack gap="md">
          <TextInput
            label="Gelin Adı"
            placeholder="Ayşe"
            defaultValue="Ayşe"
          />
          <TextInput
            label="Damat Adı"
            placeholder="Mehmet"
            defaultValue="Mehmet"
          />
          <TextInput
            label="E-posta"
            placeholder="ayse.mehmet@email.com"
            defaultValue="ayse.mehmet@email.com"
            leftSection={<IconMail size={16} />}
          />
          <TextInput
            label="Telefon"
            placeholder="+90 555 123 45 67"
            defaultValue="+90 555 123 45 67"
            leftSection={<IconPhone size={16} />}
          />
          <Select
            label="Şehir"
            placeholder="Şehir seçin"
            data={['Diyarbakır', 'İstanbul', 'Ankara', 'İzmir']}
            defaultValue="Diyarbakır"
          />
          <TextInput
            label="Düğün Tarihi"
            placeholder="12.06.2025"
            defaultValue="12.06.2025"
            leftSection={<IconCalendarTime size={16} />}
          />

          <Group justify="space-between" mt="md">
            <Button variant="outline" onClick={() => setShowEditModal(false)}>
              İptal
            </Button>
            <Button 
              style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
              onClick={() => setShowEditModal(false)}
            >
              Kaydet
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}