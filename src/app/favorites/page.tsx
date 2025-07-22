'use client';

import { Container, Title, Card, Text, Group, Badge, Button, Stack, Box, Tabs, ActionIcon, Image, Grid } from '@mantine/core';
import { IconHeart, IconBookmark, IconStar, IconMapPin, IconPhone, IconTrash, IconShare, IconEye } from '@tabler/icons-react';
import { useState } from 'react';
import { businesses, products } from '../../data/mockData';
import Link from 'next/link';

export default function FavoritesPage() {
  const [activeTab, setActiveTab] = useState<string | null>('businesses');
  
  // Mock favorite data - in real app this would come from user state/API
  const favoriteBusinessIds = ['1', '3', '4'];
  const favoriteProductIds = ['2', '4'];
  const bookmarkedBusinessIds = ['2', '5'];

  const favoriteBusinesses = businesses.filter(b => favoriteBusinessIds.includes(b.id));
  const favoriteProducts = products.filter(p => favoriteProductIds.includes(p.id));
  const bookmarkedBusinesses = businesses.filter(b => bookmarkedBusinessIds.includes(b.id));

  const removeFromFavorites = (id: string, type: 'business' | 'product') => {
    // Mock function - in real app would update state/API
    console.log(`Removing ${type} ${id} from favorites`);
  };

  const removeFromBookmarks = (id: string) => {
    // Mock function - in real app would update state/API
    console.log(`Removing business ${id} from bookmarks`);
  };

  return (
    <>
      {/* Header */}
      <Box p="md" style={{ background: 'linear-gradient(135deg, #ff8a80, #ff5722)', color: 'white' }}>
        <Group justify="space-between" align="center">
          <Title order={2} c="white">Favorilerim</Title>
          <Badge variant="light" color="rgba(255,255,255,0.2)" c="white">
            {favoriteBusinesses.length + favoriteProducts.length} öğe
          </Badge>
        </Group>
      </Box>

      <Container size="sm" p={0} pb="100px">
        {/* Tabs */}
        <Box p="md" pb={0}>
          <Tabs value={activeTab} onChange={setActiveTab}>
            <Tabs.List>
              <Tabs.Tab value="businesses" leftSection={<IconHeart size={16} />}>
                İşletmeler ({favoriteBusinesses.length})
              </Tabs.Tab>
              <Tabs.Tab value="products" leftSection={<IconHeart size={16} />}>
                Ürünler ({favoriteProducts.length})
              </Tabs.Tab>
              <Tabs.Tab value="bookmarks" leftSection={<IconBookmark size={16} />}>
                Kaydedilenler ({bookmarkedBusinesses.length})
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Box>

        <Box p="md">
          {/* Favorite Businesses */}
          {activeTab === 'businesses' && (
            <Stack gap="md">
              {favoriteBusinesses.length === 0 ? (
                <Card shadow="sm" padding="xl" radius="lg" withBorder ta="center">
                  <Text size="xl" mb="md">💔</Text>
                  <Text size="lg" fw={500} mb="xs">Henüz favori işletmeniz yok</Text>
                  <Text size="sm" c="dimmed" mb="lg">
                    Beğendiğiniz işletmeleri kalp butonuna tıklayarak favorilere ekleyin
                  </Text>
                  <Link href="/appointments" style={{ textDecoration: 'none' }}>
                    <Button 
                      radius="lg"
                      style={{ background: 'linear-gradient(135deg, #ff6b9d, #ffa726)' }}
                    >
                      İşletmeleri Keşfet
                    </Button>
                  </Link>
                </Card>
              ) : (
                favoriteBusinesses.map((business) => (
                  <Card key={business.id} shadow="sm" padding="lg" radius="lg" withBorder>
                    <Group justify="space-between" mb="md">
                      <Group>
                        <Image
                          src={business.image}
                          alt={business.name}
                          width={60}
                          height={60}
                          radius="md"
                        />
                        <Box>
                          <Text fw={600} size="md">{business.name}</Text>
                          <Badge color="pink" variant="light" size="xs" mb="xs">
                            {business.category}
                          </Badge>
                          <Group gap="xs">
                            <IconStar size={14} style={{ color: '#ffd43b' }} />
                            <Text size="xs">{business.rating}</Text>
                            <Text size="xs" c="dimmed">•</Text>
                            <Text size="xs" c="green" fw={500}>{business.price}</Text>
                          </Group>
                        </Box>
                      </Group>
                      
                      <Group gap="xs">
                        <ActionIcon 
                          variant="subtle" 
                          color="gray"
                          onClick={() => removeFromFavorites(business.id, 'business')}
                        >
                          <IconTrash size={16} />
                        </ActionIcon>
                        <ActionIcon variant="subtle" color="gray">
                          <IconShare size={16} />
                        </ActionIcon>
                      </Group>
                    </Group>

                    <Group mb="md">
                      <Group gap="xs" flex={1}>
                        <IconMapPin size={14} style={{ color: '#868e96' }} />
                        <Text size="sm" c="dimmed">{business.address}</Text>
                      </Group>
                    </Group>

                    <Group gap="xs">
                      <Link href={`/business/${business.id}`} style={{ textDecoration: 'none', flex: 1 }}>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          fullWidth
                          leftSection={<IconEye size={16} />}
                        >
                          Detayları Gör
                        </Button>
                      </Link>
                      <Button 
                        size="sm" 
                        style={{ background: 'linear-gradient(135deg, #ff6b9d, #ffa726)' }}
                        flex={1}
                      >
                        Randevu Al
                      </Button>
                    </Group>
                  </Card>
                ))
              )}
            </Stack>
          )}

          {/* Favorite Products */}
          {activeTab === 'products' && (
            <Stack gap="md">
              {favoriteProducts.length === 0 ? (
                <Card shadow="sm" padding="xl" radius="lg" withBorder ta="center">
                  <Text size="xl" mb="md">🛍️</Text>
                  <Text size="lg" fw={500} mb="xs">Henüz favori ürününüz yok</Text>
                  <Text size="sm" c="dimmed" mb="lg">
                    Beğendiğiniz ürünleri favorilere ekleyerek kolayca takip edin
                  </Text>
                  <Link href="/campaigns" style={{ textDecoration: 'none' }}>
                    <Button 
                      radius="lg"
                      style={{ background: 'linear-gradient(135deg, #4ecdc4, #44a08d)' }}
                    >
                      Kampanyaları Keşfet
                    </Button>
                  </Link>
                </Card>
              ) : (
                favoriteProducts.map((product) => (
                  <Card key={product.id} shadow="sm" padding="lg" radius="lg" withBorder>
                    <Group justify="space-between" mb="md">
                      <Group>
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={60}
                          height={60}
                          radius="md"
                        />
                        <Box>
                          <Text fw={600} size="md">{product.name}</Text>
                          <Badge color="gray" variant="light" size="xs" mb="xs">
                            {product.category}
                          </Badge>
                          <Group gap="xs">
                            <Text size="md" fw={700} c="green">
                              ₺{product.price.toLocaleString()}
                            </Text>
                            <Text size="sm" td="line-through" c="dimmed">
                              ₺{product.originalPrice.toLocaleString()}
                            </Text>
                            <Badge color="red" variant="filled" size="xs">
                              %{product.discount}
                            </Badge>
                          </Group>
                        </Box>
                      </Group>
                      
                      <Group gap="xs">
                        <ActionIcon 
                          variant="subtle" 
                          color="gray"
                          onClick={() => removeFromFavorites(product.id, 'product')}
                        >
                          <IconTrash size={16} />
                        </ActionIcon>
                        <ActionIcon variant="subtle" color="gray">
                          <IconShare size={16} />
                        </ActionIcon>
                      </Group>
                    </Group>

                    <Group mb="md">
                      <Group gap="xs" flex={1}>
                        <IconMapPin size={14} style={{ color: '#868e96' }} />
                        <Text size="sm" c="dimmed">{product.location}</Text>
                      </Group>
                    </Group>

                    <Group gap="xs">
                      <Button variant="outline" size="sm" flex={1}>
                        Mağazayı Ara
                      </Button>
                      <Button 
                        size="sm" 
                        style={{ background: 'linear-gradient(135deg, #4ecdc4, #44a08d)' }}
                        flex={1}
                      >
                        Fiyat Takip Et
                      </Button>
                    </Group>
                  </Card>
                ))
              )}
            </Stack>
          )}

          {/* Bookmarked Businesses */}
          {activeTab === 'bookmarks' && (
            <Stack gap="md">
              {bookmarkedBusinesses.length === 0 ? (
                <Card shadow="sm" padding="xl" radius="lg" withBorder ta="center">
                  <Text size="xl" mb="md">📌</Text>
                  <Text size="lg" fw={500} mb="xs">Henüz kaydettiğiniz işletme yok</Text>
                  <Text size="sm" c="dimmed" mb="lg">
                    İşletmeleri bookmark butonuna tıklayarak daha sonra için kaydedin
                  </Text>
                  <Link href="/appointments" style={{ textDecoration: 'none' }}>
                    <Button 
                      radius="lg"
                      style={{ background: 'linear-gradient(135deg, #ff6b9d, #ffa726)' }}
                    >
                      İşletmeleri Keşfet
                    </Button>
                  </Link>
                </Card>
              ) : (
                bookmarkedBusinesses.map((business) => (
                  <Card key={business.id} shadow="sm" padding="lg" radius="lg" withBorder>
                    <Group justify="space-between" mb="md">
                      <Group>
                        <Image
                          src={business.image}
                          alt={business.name}
                          width={60}
                          height={60}
                          radius="md"
                        />
                        <Box>
                          <Text fw={600} size="md">{business.name}</Text>
                          <Badge color="blue" variant="light" size="xs" mb="xs">
                            {business.category}
                          </Badge>
                          <Group gap="xs">
                            <IconStar size={14} style={{ color: '#ffd43b' }} />
                            <Text size="xs">{business.rating}</Text>
                            <Text size="xs" c="dimmed">•</Text>
                            <Text size="xs" c="green" fw={500}>{business.price}</Text>
                          </Group>
                        </Box>
                      </Group>
                      
                      <ActionIcon 
                        variant="subtle" 
                        color="gray"
                        onClick={() => removeFromBookmarks(business.id)}
                      >
                        <IconTrash size={16} />
                      </ActionIcon>
                    </Group>

                    <Group mb="md">
                      <Group gap="xs" flex={1}>
                        <IconMapPin size={14} style={{ color: '#868e96' }} />
                        <Text size="sm" c="dimmed">{business.address}</Text>
                      </Group>
                    </Group>

                    <Group gap="xs">
                      <Link href={`/business/${business.id}`} style={{ textDecoration: 'none', flex: 1 }}>
                        <Button variant="outline" size="sm" fullWidth>
                          Detayları Gör
                        </Button>
                      </Link>
                      <Button 
                        size="sm" 
                        style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
                        flex={1}
                      >
                        Randevu Al
                      </Button>
                    </Group>
                  </Card>
                ))
              )}
            </Stack>
          )}
        </Box>
      </Container>
    </>
  );
}