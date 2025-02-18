import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect, vi } from "vitest";
import { EventCard } from "../EventCard";
import { Event } from "../../models/event.model";

const mockUsedNavigate = vi.fn();
vi.mock("react-router", () => ({
  ...vi.importActual("react-router"),
  useNavigate: () => mockUsedNavigate,
}));

describe("Card test:", () => {
  const event: Event = {
    id: "1",
    title: "title",
    description: "description",
    status: "status",
    date: "date",
    ticketsAvailable: 100,
  };

  afterEach(cleanup);

  it("should render component", () => {
    render(<EventCard event={event} />);
  });

  it("should render title", () => {
    render(<EventCard event={event} />);
    screen.getByText(event.title);
  });

  it("should render description", () => {
    render(<EventCard event={event} />);
    screen.getByText(event.description);
  });

  it("should render status", () => {
    render(<EventCard event={event} />);
    screen.getByText(event.status);
  });

  it("should render date", () => {
    render(<EventCard event={event} />);
    screen.getByText(event.date);
  });

  it("should render tickets available", () => {
    render(<EventCard event={event} />);
    screen.getByText(event.ticketsAvailable.toString());
  });

  it("should navigate to event detail page when user clicks on card", () => {
    render(<EventCard event={event} />);
    const card = screen.getByRole("button");
    fireEvent.click(card);
    expect(mockUsedNavigate).toHaveBeenCalledWith(`/event/${event.id}`);
  });
});
