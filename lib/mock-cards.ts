export type SavedCard = {
  id: string;
  brand: "Mastercard" | "Visa" | "Elo" | "Amex";
  lastFour: string;
  holderName: string;
  expiryMonth: number;
  expiryYear: number;
};

let savedCards: SavedCard[] = [
  {
    id: "card_1",
    brand: "Mastercard",
    lastFour: "1234",
    holderName: "Pedro M Ribeiro",
    expiryMonth: 8,
    expiryYear: 27,
  },
  {
    id: "card_2",
    brand: "Visa",
    lastFour: "5678",
    holderName: "Pedro M Ribeiro",
    expiryMonth: 12,
    expiryYear: 26,
  },
];

export function getSavedCards(): SavedCard[] {
  return [...savedCards];
}

export function deleteCard(id: string): void {
  savedCards = savedCards.filter((c) => c.id !== id);
}

export function addCard(card: Omit<SavedCard, "id">): SavedCard {
  const newCard = { ...card, id: `card_${Date.now()}` };
  savedCards = [...savedCards, newCard];
  return newCard;
}
