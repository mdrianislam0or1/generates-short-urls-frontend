import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import ShortenUrlForm from "./ShortenUrlForm";

describe("ShortenUrlForm", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("renders the form", () => {
    render(<ShortenUrlForm />);
    expect(screen.getByPlaceholderText("Enter Long URL")).toBeInTheDocument();
    expect(screen.getByText("Shorten URL")).toBeInTheDocument();
  });

  test("shortens the URL and displays the short URL", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, data: "zbTYjc" }),
    });
    window.fetch = mockFetch;

    render(<ShortenUrlForm />);

    const input = screen.getByPlaceholderText("Enter Long URL");
    const button = screen.getByText("Shorten URL");

    fireEvent.change(input, { target: { value: "https://example.com" } });
    fireEvent.click(button);

    const shortUrl = await screen.findByText(/Short URL:/);
    expect(shortUrl).toBeInTheDocument();
    expect(shortUrl).toHaveTextContent(
      "https://short-urls-phi.vercel.app/api/url/zbTYjc"
    );
  });

  test("handles fetch errors", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => ({ success: false, message: "Error" }),
    });
    window.fetch = mockFetch;

    render(<ShortenUrlForm />);

    const input = screen.getByPlaceholderText("Enter Long URL");
    const button = screen.getByText("Shorten URL");

    fireEvent.change(input, { target: { value: "https://example.com" } });
    fireEvent.click(button);

    expect(await screen.queryByText(/Short URL:/)).toBeNull();
  });
});
