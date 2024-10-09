import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from './Form';

describe('Form Component - Name Input', () => {
  const NAME_INPUT_PLACEHOLDER = 'Podaj swoje imię';
  const INVALID_SHORT_NAME = 'J';
  const VALID_NAME = 'Jan';

  beforeEach(() => {
    render(<Form />);
  });

  test('should reject empty name input', () => {
    const nameInput = screen.getByPlaceholderText(NAME_INPUT_PLACEHOLDER);
    fireEvent.input(nameInput, { target: { value: '' } });
    expect(nameInput.value).toBe('');
    expect(nameInput).toBeInvalid();
  });

  test('should reject single character name', () => {
    const nameInput = screen.getByPlaceholderText(NAME_INPUT_PLACEHOLDER);
    fireEvent.input(nameInput, { target: { value: INVALID_SHORT_NAME } });
    expect(nameInput.value).toBe(INVALID_SHORT_NAME);
    expect(nameInput).toBeInvalid();
  });

  test('should accept valid name', () => {
    const nameInput = screen.getByPlaceholderText(NAME_INPUT_PLACEHOLDER);
    fireEvent.input(nameInput, { target: { value: VALID_NAME } });
    expect(nameInput.value).toBe(VALID_NAME);
    expect(nameInput).toBeValid();
  });
});

describe('Form Component', () => {
  test('should validate email input for correct format', () => {
    render(<Form />);

    const emailInput = screen.getByPlaceholderText('Podaj swój adres e-mail');

    fireEvent.input(emailInput, { target: { value: '' } });
    expect(emailInput.value).toBe('');
    expect(emailInput.checkValidity()).toBe(false);

    fireEvent.input(emailInput, { target: { value: 'invalid-email' } });
    expect(emailInput.value).toBe('invalid-email');

    expect(emailInput.checkValidity()).toBe(false);

    fireEvent.input(emailInput, { target: { value: 'jan@example.com' } });
    expect(emailInput.value).toBe('jan@example.com');
    expect(emailInput.checkValidity()).toBe(true);
  });

  test('should validate description input for non-empty value', () => {
    render(<Form />);

    const descriptionInput = screen.getByPlaceholderText(
      'Opisz jaki masz pomysł na dziarkę :) Zamin o coś zapytasz zerknij na FAQ ;), Minmalna długość opisu to 5 słów.'
    );

    fireEvent.input(descriptionInput, { target: { value: '' } });
    expect(descriptionInput.value).toBe('');
    expect(descriptionInput.checkValidity()).toBe(false);

    fireEvent.input(descriptionInput, { target: { value: 'Krótki opis' } });
    expect(descriptionInput.value).toBe('Krótki opis');
    expect(descriptionInput.checkValidity()).toBe(true);
  });
});
