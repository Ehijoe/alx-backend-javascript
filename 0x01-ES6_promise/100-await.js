import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let user;
  let photo;
  try {
    user = await createUser();
  } catch (err) {
    user = null;
  }
  try {
    photo = await uploadPhoto();
  } catch (err) {
    photo = null;
  }

  return { photo, user };
}
