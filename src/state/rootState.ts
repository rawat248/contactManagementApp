interface Contact {
  id: string;
  FirstName: string;
  LastName: string;
  Status: string;
}

interface RootState {
  contact: {
    list: Contact[];
  };
}
export default RootState;
