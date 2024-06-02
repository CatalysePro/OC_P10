// v1_ additionnal test for social media links
// UNCOMMENT the additionnal tests hereunder to make them work --> file to be corrected : Page.js (not available)
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
  })
  it("a list a people is displayed", () => {
    // to implement
  })
  it("a footer is displayed", () => {
    // to implement
  })
  it("an event card, with the last event, is displayed", () => {
    // to implement
  })
});

// additional test for social media direction 

// describe("When social media icons are clicked", () => {
//   it("they do not navigate to external pages", () => {
//     render(<Home />);
//     const socialMediaLinks = [
//       { name: 'twitch', href: '#twitch' },
//       { name: 'facebook', href: '#facebook' },
//       { name: 'twitter', href: '#twitter' },
//       { name: 'youtube', href: '#youtube' },
//     ];

//     socialMediaLinks.forEach(({ name, href }) => {
//       const linkElement = screen.getByRole('link', { name });
//       expect(linkElement).toBeInTheDocument();
//       expect(linkElement).toHaveAttribute('href', href);

//       fireEvent.click(linkElement);
//       // Check the current URL doesn't change when a click occurs
//       expect(window.location.href).not.toContain(href);
//     });
//   });
// });
