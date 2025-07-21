'use client';

import { Container, Title, Card, Text, Group, Badge, Button, Stack, Box, TextInput } from '@mantine/core';
import { IconSearch, IconMapPin, IconDiscount2 } from '@tabler/icons-react';
import { useState } from 'react';
import { products } from '../../data/mockData';

export default function CampaignsPage() {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <Box p="md" style={{ background: 'linear-gradient(135deg, #4ecdc4, #44a08d)', color: 'white' }}>
        <Group justify="space-between" align="center">
          <Title order={2} c="white">Kampanyalar</Title>
          <Badge variant="light" color="rgba(255,255,255,0.2)" c="white">
            {filteredProducts.length} fırsat
          </Badge>
        </Group>
      </Box>

      <Container size="sm" p="md" pb="100px">
        <TextInput
          placeholder="Beyaz eşya, mobilya, tekstil ara..."
          leftSection={<IconSearch size={16} />}
          mb="lg"
          size="md"
          radius="lg"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          style={{
            '& input': {
              border: 'none',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }
          }}
        />

        <Stack gap="md">
          {filteredProducts.map((product) => (
            <Card key={product.id} shadow="sm" padding="lg" radius="lg" withBorder>
              <Group justify="space-between" mb="xs">
                <Text fw={600} size="md" style={{ flex: 1, lineHeight: 1.3 }}>
                  {product.name}
                </Text>
                <Badge 
                  color="red" 
                  variant="filled" 
                  leftSection={<IconDiscount2 size={12} />}
                  size="lg"
                  style={{ fontWeight: 600 }}
                >
                  %{product.discount}
                </Badge>
              </Group>

              <Badge color="gray" variant="light" mb="md" size="sm">
                {product.category}
              </Badge>

              <Group mb="md" align="baseline">
                <Text size="xl" fw={700} c="green">
                  ₺{product.price.toLocaleString()}
                </Text>
                <Text size="md" td="line-through" c="dimmed">
                  ₺{product.originalPrice.toLocaleString()}
                </Text>
                <Text size="sm" c="red" fw={500}>
                  ₺{(product.originalPrice - product.price).toLocaleString()} tasarruf!
                </Text>
              </Group>

              <Group mb="xs">
                <Text size="sm" fw={500} c="dark">{product.store}</Text>
              </Group>

              <Group mb="lg" gap="xs">
                <IconMapPin size={14} style={{ color: '#868e96' }} />
                <Text size="sm" c="dimmed">{product.location}</Text>
              </Group>

              <Group gap="xs">
                <Button 
                  variant="outline" 
                  size="sm" 
                  flex={1}
                  radius="lg"
                  color="blue"
                >
                  Mağazayı Ara
                </Button>
                <Button 
                  variant="filled" 
                  size="sm" 
                  flex={1}
                  radius="lg"
                  style={{ 
                    background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
                    border: 'none'
                  }}
                >
                  Fiyat Takip Et
                </Button>
              </Group>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
}