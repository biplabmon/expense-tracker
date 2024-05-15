export const Currencies = [
    {value: "USD", label: "$ Dollar", locale: "en-US"},
    {value: "INR", label: "₹ Indian Rupee", locale: "en-IN"},
    {value: "EUR", label: "€ Euro", locale: "de-DE"},
    {value: "GBP", label: "£ Pound", locale: "en-GB"},
    {value: "JPY", label: "¥ Japanese Yen", locale: "ja-JP"},
    {value: "RUB", label: "₽ Russian Ruble", locale: "ru-RU"},
];

export type Currency = (typeof Currencies)[0];