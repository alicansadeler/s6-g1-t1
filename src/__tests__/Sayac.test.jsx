import { beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Sayac from '../components/Sayac';

beforeEach(() => {
  render(<Sayac />);
});

test('"Sayı: 0 çift sayıdır" yazısı ile başlıyor.', () => {
  expect(screen.getByText('Sayı: 0 çift sayıdır')).toBeDefined();
});

test('Başlangıç metninin rengi royal blue.', async () => {
  const element = await screen.findByText(/Sayı: 0/i, undefined, {
      timeout: 250,
    });
  expect(getComputedStyle(element).color).toBe('rgb(65, 105, 225)');
});

test('Artırıcı butonuna basılınca sayı 1er 1er artıyor', async () => {
  const artir = screen.getByText(/Artırıcı/i);
  fireEvent.click(artir);
  fireEvent.click(artir);
  fireEvent.click(artir);
  expect(await screen.findByText(/Sayı: 3/i, undefined, {
      timeout: 250,
    })).toBeDefined();
});

test('Artırıcı butonuna 1 kez basılınca metin "Sayı: 1 tek sayıdır" oluyor', async () => {
  fireEvent.click(screen.getByText(/Artırıcı/i));
  expect(await screen.findByText(/Sayı: 1 tek sayıdır/i, undefined, {
      timeout: 250,
    })).toBeDefined();
});

test('Artırıcı butonuna 2 kez basılınca metin "Sayı: 2 çift sayıdır" oluyor', async () => {
  const artir = screen.getByText(/Artırıcı/i);
  fireEvent.click(artir);
  fireEvent.click(artir);
  expect(await screen.findByText(/Sayı: 2 çift sayıdır/i, undefined, {
      timeout: 250,
    })).toBeDefined();
});

test('Azaltıcı butonuna basılınca sayı 1er 1er azaltıyor', async () => {
  const artir = screen.getByText(/Azaltıcı/i);
  fireEvent.click(artir);
  fireEvent.click(artir);
  fireEvent.click(artir);
  expect(await screen.findByText(/Sayı: -3/i, undefined, {
      timeout: 250,
    })).toBeDefined();
});

test('Azaltıcı butonuna 1 kez basılınca metin "Sayı: -1 tek sayıdır" oluyor', async () => {
  fireEvent.click(screen.getByText(/Azaltıcı/i));
  expect(await screen.findByText(/Sayı: -1 tek sayıdır/i, undefined, {
      timeout: 250,
    })).toBeDefined();
});

test('Azaltıcı butonuna 2 kez basılınca metin "Sayı: -2 çift sayıdır" oluyor', async () => {
  const artir = screen.getByText(/Azaltıcı/i);
  fireEvent.click(artir);
  fireEvent.click(artir);
  expect(await screen.findByText(/Sayı: -2 çift sayıdır/i, undefined, {
      timeout: 250,
    })).toBeDefined();
});

test('Çift sayılarda metin rengi royal blue oluyor', async () => {
  const artir = screen.getByText(/Artırıcı/i);
  fireEvent.click(artir);
  fireEvent.click(artir);
  const element = await screen.findByText(/Sayı: 2/i, undefined, {
      timeout: 250,
    });
  expect(getComputedStyle(element).color).toBe('rgb(65, 105, 225)');
});

test('Tek sayılarda metin rengi crimson oluyor', async () => {
  const artir = screen.getByText(/Artırıcı/i);
  fireEvent.click(artir);
  fireEvent.click(artir);
  fireEvent.click(artir);
  const element = await screen.findByText(/Sayı: 3/i, undefined, {
      timeout: 250,
    });
  expect(getComputedStyle(element).color).toBe('rgb(220, 20, 60)');
});

test('Reset butonu sayıyı sıfırlıyor', async () => {
  const artir = screen.getByText(/Reset/i);
  fireEvent.click(artir);
  expect(await screen.findByText(/Sayı: 0/i, undefined, {
      timeout: 250,
    })).toBeDefined();
});

test("Reset butonu'na basınca metin 'Sayı: 0 çift sayıdır' oluyor", async () => {
  const artir = screen.getByText(/Reset/i);
  fireEvent.click(artir);
  expect(await screen.findByText(/Sayı: 0 çift sayıdır/i, undefined, {
      timeout: 250,
    })).toBeDefined();
});
