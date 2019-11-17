//commands based on https://github.com/humbertopiaia/escpos-commands-js/blob/master/src/commands.js
//all the commands below may vary by printer, check the manual
export const commands = {
  LF: [0x0a],
  ESC: [0x1b],
  FS: [0x1c],
  GS: [0x1d],
  US: [0x1f],
  FF: [0x0c],
  DLE: [0x10],
  DC1: [0x11],
  DC4: [0x14],
  EOT: [0x04],
  NUL: [0x00],
  //EOL: [\n],
  HORIZONTAL_LINE: {
    HR_58MM: '================================',
    HR2_58MM: '********************************'
  },
  FEED_CONTROL_SEQUENCES: {
    CTL_LF: [0x0a], // Print and line feed
    CTL_FF: [0x0c], // Form feed
    CTL_CR: [0x0d], // Carriage return
    CTL_HT: [0x09], // Horizontal tab
    CTL_VT: [0x0b], // Vertical tab
  },
  LINE_SPACING: {
    LS_DEFAULT: [0x1b,0x32],
    LS_SET: [0x1b,0x33]
  },
  HARDWARE: {
    HW_INIT: [0x1b,0x40], // Clear data in buffer and reset modes
    HW_SELECT: [0x1b,0x3d,0x01], // Printer select
    HW_RESET: [0x1b,0x3f,0x0a,0x00], // Reset printer hardware
  },
  CASH_DRAWER: {
    CD_KICK_2: [0x1b,0x70,0x00], // Sends a pulse to pin 2 []
    CD_KICK_5: [0x1b,0x70,0x01], // Sends a pulse to pin 5 []
  },
  MARGINS: {
    BOTTOM: [0x1b,0x4f], // Fi0x bottom size
    LEFT: [0x1b,0x6c], // Fi0x left size
    RIGHT: [0x1b,0x51], // Fi0x right size
  },
  PAPER: {
    PAPER_FULL_CUT: [0x1d,0x56,0x00], // Full cut paper
    PAPER_PART_CUT: [0x1d,0x56,0x01], // Partial cut paper
    PAPER_CUT_A: [0x1d,0x56,0x41], // Partial cut paper
    PAPER_CUT_B: [0x1d,0x56,0x42], // Partial cut paper
  },
  TEXT_FORMAT: {
    TXT_NORMAL: [0x1b,0x21,0x00], // Normal text
    TXT_2HEIGHT: [0x1b,0x21,0x10], // Double height text
    TXT_2WIDTH: [0x1b,0x21,0x20], // Double width text
    TXT_4SQUARE: [0x1b,0x21,0x30], // Double width & height text
    TXT_CUSTOM_SIZE: function (width, height) { // other sizes
      var widthDec = (width - 1) * 16;
      var heightDec = height - 1;
      var sizeDec = widthDec + heightDec;
      return [0x1d,0x21,String.fromCharCode(sizeDec)]
    },

    TXT_HEIGHT: {
      1: [0x00],
      2: [0x01],
      3: [0x02],
      4: [0x03],
      5: [0x04],
      6: [0x05],
      7: [0x06],
      8: [0x07]
    },
    TXT_WIDTH: {
      1: [0x00],
      2: [0x10],
      3: [0x20],
      4: [0x30],
      5: [0x40],
      6: [0x50],
      7: [0x60],
      8: [0x70]
    },

    TXT_UNDERL_OFF: [0x1b,0x2d,0x00], // Underline font OFF
    TXT_UNDERL_ON: [0x1b,0x2d,0x01], // Underline font 1-dot ON
    TXT_UNDERL2_ON: [0x1b,0x2d,0x02], // Underline font 2-dot ON
    TXT_BOLD_OFF: [0x1b,0x45,0x00], // Bold font OFF
    TXT_BOLD_ON: [0x1b,0x45,0x01], // Bold font ON
    TXT_ITALIC_OFF: [0x1b,0x35], // Italic font ON
    TXT_ITALIC_ON: [0x1b,0x34], // Italic font ON
    TXT_FONT_A: [0x1b,0x4d,0x00], // Font type A
    TXT_FONT_B: [0x1b,0x4d,0x01], // Font type B
    TXT_FONT_C: [0x1b,0x4d,0x02], // Font type C
    TXT_ALIGN_LT: [0x1b,0x61,0x00], // Left justification
    TXT_ALIGN_CT: [0x1b,0x61,0x01], // Centering
    TXT_ALIGN_RT: [0x1b,0x61,0x02], // Right justification
  }
}
