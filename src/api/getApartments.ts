import type { Apartment } from '@/interfaces/Apartment';

interface Response {
  data: Apartment[];
}

const BASE_URL = `${import.meta.env.VITE_API_URL}apartments`;

export async function getApartments(body = {}): Promise<Response | undefined> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  try {
    const queryParams = new URLSearchParams(body); // Преобразуем объект body в параметры URL

    const response = await fetch(`${BASE_URL}?${queryParams}`, {
      method: 'GET',
      headers: headers
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return undefined; // Возвращаем undefined в случае ошибки
  }
}