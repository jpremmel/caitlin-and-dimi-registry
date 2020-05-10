export const initialGiftFormState = {
  'name': '',
  'note': '',
  'public': false,
  'funds': {
    'honeymoon': {
      'checkbox': false,
      'amount': '',
      'style': { display: 'none' },
      'label': 'Honeymoon'
    },
    'loan': {
      'checkbox': false,
      'amount': '',
      'style': { display: 'none' },
      'label': 'Student Loan Debt'
    },
    'home': {
      'checkbox': false,
      'amount': '',
      'style': { display: 'none' },
      'label': 'Our First Home'
    },
    'therapy': {
      'checkbox': false,
      'amount': '',
      'style': { display: 'none' },
      'label': 'Therapy for Our Future Kids'
    }
  }
};