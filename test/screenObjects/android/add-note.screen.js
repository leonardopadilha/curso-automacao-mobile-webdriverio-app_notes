class AddNoteScreen {
    get skipBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
    }

    get addNoteText() {
        return $('//*[@text="Add note"]')
    }
}

module.exports = new AddNoteScreen()