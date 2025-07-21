'use client';

import { Box, Stack, Text } from '@mantine/core';
import { IconHome, IconCalendarTime, IconDiscount2, IconHeart, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNavigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: IconHome, label: 'Ana Sayfa', id: 'home' },
    { href: '/appointments', icon: IconCalendarTime, label: 'Randevu', id: 'appointments' },
    { href: '/campaigns', icon: IconDiscount2, label: 'Kampanya', id: 'campaigns' },
    { href: '/favorites', icon: IconHeart, label: 'Favoriler', id: 'favorites' },
    { href: '/profile', icon: IconUser, label: 'Profil', id: 'profile' }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <Box 
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '430px',
        background: '#ffffff',
        borderTop: 'none',
        padding: '8px 0 12px 0',
        zIndex: 1000,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px'
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60px'
      }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          
          return (
            <Link 
              key={item.id} 
              href={item.href} 
              style={{ 
                textDecoration: 'none',
                flex: 1,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Stack 
                gap={2} 
                align="center"
                style={{
                  padding: '8px 12px',
                  borderRadius: '12px',
                  background: active ? '#ff6b9d15' : 'transparent',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  minWidth: '50px'
                }}
              >
                <Icon 
                  size={24} 
                  color={active ? '#ff6b9d' : '#9ca3af'}
                  style={{
                    transition: 'all 0.2s ease',
                    transform: active ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <Text 
                  size="10px" 
                  style={{
                    color: active ? '#ff6b9d' : '#9ca3af',
                    fontWeight: active ? 600 : 400,
                    transition: 'all 0.2s ease'
                  }}
                >
                  {item.label}
                </Text>
              </Stack>
            </Link>
          );
        })}
      </div>
    </Box>
  );
}