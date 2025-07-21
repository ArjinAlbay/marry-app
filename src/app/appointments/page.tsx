'use client';

import { Container, Title, Card, Text, Group, Badge, Button, Stack, Box, TextInput, Tabs, Select, RangeSlider, Modal, ActionIcon } from '@mantine/core';
import { IconSearch, IconStar, IconMapPin, IconPhone, IconFilter, IconHeart, IconShare, IconBookmark } from '@tabler/icons-react';
import { useState } from 'react';
import { businesses } from '../../data/mockData';
import Link from 'next/link';

export default function AppointmentsPage() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<string | null>('all');
  const [sortBy, setSortBy] = useState<string | null>('rating');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30000]);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [bookmarked, setBookmarked] = useState<string[]>([]);

  const categories = ['all', 'Kuaför', 'Berber', 'Gelinlikçi', 'Düğün Salonu', 'Kına Organizasyon', 'Nişan Organizasyon'];

  const toggleFavorite = (businessId: string) => {
    setFavorites(prev => 
      prev.includes(businessId) 
        ? prev.filter(id => id !== businessId)
        : [...prev, businessId]
    );
  };

  const toggleBookmark = (businessId: string) => {
    setBookmarked(prev => 
      prev.includes(businessId) 
        ? prev.filter(id => id !== businessId)
        : [...prev, businessId]
    );
  };

  const getMaxPrice = (priceStr: string) => {
    const numbers = priceStr.match(/\d+/g);
    return numbers ? Math.max(...numbers.map(Number)) : 0;
  };

  let filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(search.toLowerCase()) ||
                         business.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeTab === 'all' || business.category === activeTab;
    const businessMaxPrice = getMaxPrice(business.price);
    const matchesPrice = businessMaxPrice >= priceRange[0] && businessMaxPrice <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sorting
  if (sortBy === 'rating') {
    filteredBusinesses.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'price_low') {
    filteredBusinesses.sort((a, b) => getMaxPrice(a.price) - getMaxPrice(b.price));
  } else if (sortBy === 'price_high') {
    filteredBusinesses.sort((a, b) => getMaxPrice(b.price) - getMaxPrice(a.price));
  } else if (sortBy === 'promotions') {
    filteredBusinesses.sort((a, b) => (b.hasPromotions ? 1 : 0) - (a.hasPromotions ? 1 : 0));
  }

  return (
    <>
      {/* Header */}
      <Box p="md" style={{ background: 'linear-gradient(135deg, #ff6b9d, #ffa726)', color: 'white' }}>
        <Group justify="space-between" align="center" mb="md">
          <Title order={2} c="white">Randevu Al</Title>
          <Group>
            <ActionIcon 
              variant="subtle" 
              color="white" 
              onClick={() => setShowFilters(true)}
            >
              <IconFilter size={20} />
            </ActionIcon>
            <Badge variant="light" color="rgba(255,255,255,0.2)" c="white">
              {filteredBusinesses.length} işletme
            </Badge>
          </Group>
        </Group>

        <TextInput
          placeholder="Kuaför, berber, gelinlikçi ara..."
          leftSection={<IconSearch size={16} />}
          size="md"
          radius="lg"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          style={{
            '& input': {
              border: 'none',
              background: 'rgba(255,255,255,0.9)',
              color: '#333'
            }
          }}
        />
      </Box>

      <Container size="sm" p={0} pb="100px">
        {/* Category Tabs */}
        <Box p="md" pb={0}>
          <Tabs value={activeTab} onChange={setActiveTab}>
            <Tabs.List style={{ overflowX: 'auto', flexWrap: 'nowrap' }}>
              {categories.map((category) => (
                <Tabs.Tab key={category} value={category} style={{ whiteSpace: 'nowrap' }}>
                  {category === 'all' ? 'Tümü' : category}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>
        </Box>

        {/* Sort & Quick Filters */}
        <Box p="md" pt="xs">
          <Group gap="xs">
            <Select
              placeholder="Sırala"
              size="xs"
              data={[
                { value: 'rating', label: '⭐ En Yüksek Puan' },
                { value: 'price_low', label: '💰 En Düşük Fiyat' },
                { value: 'price_high', label: '💎 En Yüksek Fiyat' },
                { value: 'promotions', label: '🔥 Kampanyalı' }
              ]}
              value={sortBy}
              onChange={setSortBy}
              style={{ flex: 1 }}
            />
            <Badge 
              variant="outline" 
              color="red" 
              size="sm"
              style={{ cursor: 'pointer' }}
              onClick={() => filteredBusinesses = filteredBusinesses.filter(b => b.hasPromotions)}
            >
              🔥 Kampanyalı
            </Badge>
          </Group>
        </Box>

        <Box px="md">
          <Stack gap="md">
            {filteredBusinesses.map((business) => (
              <Card key={business.id} shadow="sm" padding="lg" radius="lg" withBorder style={{ position: 'relative' }}>
                {/* Favorite & Bookmark Actions */}
                <Group style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }} gap="xs">
                  <ActionIcon
                    variant="subtle"
                    color={favorites.includes(business.id) ? 'red' : 'gray'}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(business.id);
                    }}
                  >
                    <IconHeart size={18} fill={favorites.includes(business.id) ? 'red' : 'none'} />
                  </ActionIcon>
                  <ActionIcon
                    variant="subtle"
                    color={bookmarked.includes(business.id) ? 'blue' : 'gray'}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleBookmark(business.id);
                    }}
                  >
                    <IconBookmark size={18} fill={bookmarked.includes(business.id) ? 'blue' : 'none'} />
                  </ActionIcon>
                  <ActionIcon variant="subtle" color="gray">
                    <IconShare size={18} />
                  </ActionIcon>
                </Group>

                <Link href={`/business/${business.id}`} style={{ textDecoration: 'none' }}>
                  <Box style={{ cursor: 'pointer' }}>
                    <Group justify="space-between" mb="xs" mr={80}>
                      <Text fw={600} size="lg" c="dark">{business.name}</Text>
                      <Badge 
                        color="pink" 
                        variant="light" 
                        size="sm"
                        style={{ fontWeight: 500 }}
                      >
                        {business.category}
                      </Badge>
                    </Group>

                    <Group mb="md">
                      <Group gap="xs">
                        <IconStar size={16} style={{ color: '#ffd43b' }} />
                        <Text size="sm" fw={500}>{business.rating}</Text>
                      </Group>
                      <Text size="sm" c="dimmed">•</Text>
                      <Text size="sm" fw={500} c="green">{business.price}</Text>
                      {business.hasPromotions && (
                        <>
                          <Text size="sm" c="dimmed">•</Text>
                          <Badge color="red" variant="filled" size="xs">🔥 Kampanyalı!</Badge>
                        </>
                      )}
                    </Group>

                    <Group mb="sm" gap="xs">
                      <IconMapPin size={14} style={{ color: '#868e96' }} />
                      <Text size="sm" c="dimmed">{business.address}</Text>
                    </Group>

                    <Group mb="md" gap="xs">
                      <IconPhone size={14} style={{ color: '#868e96' }} />
                      <Text size="sm" c="dimmed">{business.phone}</Text>
                    </Group>

                    <Text size="sm" fw={500} mb="xs" c="dark">Uygun Saatler:</Text>
                    <Group mb="lg">
                      {business.availableSlots.slice(0, 3).map((slot) => (
                        <Badge 
                          key={slot} 
                          variant="outline" 
                          size="sm"
                          color="blue"
                        >
                          {slot}
                        </Badge>
                      ))}
                      {business.availableSlots.length > 3 && (
                        <Badge variant="outline" size="sm" color="gray">
                          +{business.availableSlots.length - 3} daha
                        </Badge>
                      )}
                    </Group>

                    <Button 
                      fullWidth 
                      size="md" 
                      radius="lg"
                      style={{ 
                        background: 'linear-gradient(135deg, #ff6b9d, #ffa726)',
                        border: 'none'
                      }}
                    >
                      Detayları Görüntüle
                    </Button>
                  </Box>
                </Link>
              </Card>
            ))}
          </Stack>
        </Box>
      </Container>

      {/* Filter Modal */}
      <Modal
        opened={showFilters}
        onClose={() => setShowFilters(false)}
        title="Filtreler"
        centered
      >
        <Stack gap="lg">
          <div>
            <Text size="sm" fw={500} mb="xs">Fiyat Aralığı</Text>
            <RangeSlider
              value={priceRange}
              onChange={setPriceRange}
              min={0}
              max={30000}
              step={500}
              marks={[
                { value: 0, label: '₺0' },
                { value: 15000, label: '₺15K' },
                { value: 30000, label: '₺30K+' }
              ]}
              mb="md"
            />
            <Group justify="space-between">
              <Text size="sm" c="dimmed">₺{priceRange[0].toLocaleString()}</Text>
              <Text size="sm" c="dimmed">₺{priceRange[1].toLocaleString()}</Text>
            </Group>
          </div>

          <Select
            label="Sıralama"
            data={[
              { value: 'rating', label: 'En Yüksek Puan' },
              { value: 'price_low', label: 'En Düşük Fiyat' },
              { value: 'price_high', label: 'En Yüksek Fiyat' },
              { value: 'promotions', label: 'Kampanyalı Önce' }
            ]}
            value={sortBy}
            onChange={setSortBy}
          />

          <Group justify="space-between">
            <Button variant="outline" onClick={() => setShowFilters(false)}>
              İptal
            </Button>
            <Button 
              style={{ background: 'linear-gradient(135deg, #ff6b9d, #ffa726)' }}
              onClick={() => setShowFilters(false)}
            >
              Uygula
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}