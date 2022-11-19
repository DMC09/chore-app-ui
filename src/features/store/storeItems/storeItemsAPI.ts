import response from '../../../stub/response.json'
// change 
export function fetchCount(amount = 1) {
    // console.log(process.env)
    console.log(response,'what is going on!')
    return new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }
  