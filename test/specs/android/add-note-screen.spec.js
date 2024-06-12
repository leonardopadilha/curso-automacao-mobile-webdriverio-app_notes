import { expect } from '@wdio/globals'
import AddNoteScreen from "../../screenObjects/android/add-note.screen.js";

const addNoteScreen = new AddNoteScreen()

describe('Add Notes', () => {
  it('Skip tutorial', async () => {
    await addNoteScreen.skipBtn.click();

    await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
  });

  it('add a note, save changes & verify note', async () => {
    await addNoteScreen.addNoteTxt.click();
    await addNoteScreen.textOption.click();
    await expect(addNoteScreen.textEditing).toBeDisplayed();

    // add note title
    await addNoteScreen.noteHeading.addValue("Anime List");

    // add note body
    await addNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

    // save the changes
    await addNoteScreen.saveNote();

    // assertion
    await expect(addNoteScreen.editBtn).toBeDisplayed();
    await expect(addNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");
  });
});