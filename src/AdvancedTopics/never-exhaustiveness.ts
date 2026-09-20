

type Payment = "pending" | "paid" |"failed"

//if this is payment the default will throw error
// type Payment = "pending" | "paid" |"failed"|"refunded"

function getPaymentStatus(status:Payment):string
{
    switch (status) {
        case "pending":
            return "pending"
        case "paid":
            return "paid"
        case "failed":
            return "failed"
    
        default:
            //if we dont handle the every case the below code throw error because status type will not be never
            let neverExecuting :never = status
            return "this should never return"
    }
}