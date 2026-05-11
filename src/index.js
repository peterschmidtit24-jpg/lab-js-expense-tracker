// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
    }

    getFormattedAmount() {
        const response = `${this.amount} €`
        return response
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description)

        this.date = date
        this.amount = amount
        this.description = description
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, category) {
        super(date, amount, description)

        this.paid = category
        this.type = "expense";
    }

    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {


    constructor() {
        this.entries = []
        this.totalIncome = 0
        this.totalExpense = 0
    }

    addEntry(newEntry) {
        this.entries.push(newEntry)
    }

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0
        }

        this.entries.forEach((entry, i, arr) => {
            if (entry.type === "income") {
                this.totalIncome += entry.amount
            }
            else if (entry.type === "expense") {
                this.totalExpense += entry.amount
            }            
        })

        // console.log("totalIncome = ", this.totalIncome)
        // console.log("totalExpense = ", this.totalExpense)
        return (this.totalIncome - this.totalExpense)
    }

    getFormattedEntries() {
        const formEntries = []

        this.entries.forEach((entry, i, arr) => {
            const operation = "-"    

            let stringOut = ""

            if (entry.type === "expense") {
                stringOut = `${entry.date} | ${entry.description} | ${operation}${entry.amount} €`
            }
            else {
                stringOut = `${entry.date} | ${entry.description} | ${entry.amount} €`
            }

            // console.log(stringOut)
            formEntries.push(stringOut)
        })

        // console.log("formEntries", formEntries)
        return formEntries
    }
}
