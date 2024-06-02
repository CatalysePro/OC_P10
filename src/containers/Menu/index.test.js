// v4_ Add 3 tests to test and proove that Menu nav link clicks do not work
// UNCOMMENT the additionnal tests hereunder to make them work --> file to be corrected : Page.js (available -->Page_v2)
import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./index";

describe("When Menu is created", () => {
  it("a list of mandatories links and the logo are displayed", async () => {
    render(<Menu />);
    await screen.findByText("Nos services");
    await screen.findByText("Nos réalisations");
    await screen.findByText("Notre équipe");
    await screen.findByText("Contact");
  });

  describe("and a click is triggered on contact button", () => {
    it("document location hash changes", async () => {
      render(<Menu />);
      fireEvent(
        await screen.findByText("Contact"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      expect(window.document.location.hash).toEqual("#contact");
    });
  });

  // additionnal tests on menu nav links
  // describe("and a click is triggered on navigation links", () => {
  //   beforeEach(() => {
  //     render(<Menu />);
  //   });

  //   it("does not navigate to 'Nos services' section because it does not exist", async () => {
  //     fireEvent(
  //       await screen.findByText("Nos services"),
  //       new MouseEvent("click", {
  //         cancelable: true,
  //         bubbles: true,
  //       })
  //     );
  //     expect(window.document.location.hash).toEqual("#nos-services");
  //     const nosServicesSection = document.querySelector("#nos-services");
  //     expect(nosServicesSection).toBeNull();
  //   });

  //   it("does not navigate to 'Nos réalisations' section because it does not exist", async () => {
  //     fireEvent(
  //       await screen.findByText("Nos réalisations"),
  //       new MouseEvent("click", {
  //         cancelable: true,
  //         bubbles: true,
  //       })
  //     );
  //     expect(window.document.location.hash).toEqual("#nos-realisations");
  //     const nosRealisationsSection = document.querySelector("#nos-realisations");
  //     expect(nosRealisationsSection).toBeNull();
  //   });

  //   it("does not navigate to 'Notre équipe' section because it does not exist", async () => {
  //     fireEvent(
  //       await screen.findByText("Notre équipe"),
  //       new MouseEvent("click", {
  //         cancelable: true,
  //         bubbles: true,
  //       })
  //     );
  //     expect(window.document.location.hash).toEqual("#notre-equipe");
  //     const notreEquipeSection = document.querySelector("#notre-equipe");
  //     expect(notreEquipeSection).toBeNull();
  //   });
  // });
});
