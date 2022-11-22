import { Voice } from "../model/voice.js";

export const createVoice = async (object) => {
  try {
    let voice = new Voice({ ...object });
    return { status: true, data: await voice.save() };
  } catch (error) {
    return { status: false };
  }
};
