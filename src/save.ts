import client from './db';

export class MessageSendSave {

  static async saveDatabase( lastname: string, firstname: string, email: string, message: string): Promise<boolean> {
    console.log("MessageSend : save Database");
    try {
      const values = [firstname, lastname, email,  message];
      const query = 'INSERT INTO contact (last_name, first_name, email,  message) VALUES ($1, $2, $3, $4)';
      await client.query(query, values);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des données :', error);
      return false;
    }
    return true;
  }
}