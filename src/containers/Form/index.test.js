// v1 checks if fields are filled in before sending email
// UNCOMMENT the additionnal tests hereunder to make them work --> file to be corrected : Form.js (not available)
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./index";

describe("When Events is created", () => {
  it("a list of event card is displayed", async () => {
    render(<Form />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success action is called", async () => {
      const onSuccess = jest.fn();
      render(<Form onSuccess={onSuccess} />);
      fireEvent(
        await screen.findByTestId("button-test-id"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Envoyer");
      expect(onSuccess).toHaveBeenCalled();
    });
  });
});

// additional test for filled in fields

// describe("When clicking the submit button with empty fields", () => {
//   it("displays an error message about required fields", async () => {
//     render(<Form />);
//     fireEvent.click(await screen.findByText("Envoyer"));
    
//     // Assuming that if there was an error, it would contain this text
//     const errorMessage = await screen.findByText(/tous les champs doivent être remplis/i);
//     expect(errorMessage).toBeInTheDocument();
//   });
// });
