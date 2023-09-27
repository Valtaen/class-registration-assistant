import { describe, expect, it } from 'bun:test'
import { classDB } from "./classData"

//For more info on writing tests, see <https://bun.sh/docs/test/writing>

describe('Class Data', () => {
    it('Should have at least one test',() => {
        expect(
            classDB.query("SELECT * FROM Classes LIMIT 1")
        ).not.toBeNull()
    })

    it('Should contain "CSCI362"', () => {
        expect(
            classDB.query("select * from Classes where courseName ='CSCI362'").get()
        ).toMatchObject({
            CRN: 10155,
            partOfTerm: 1,
            section: 1,
            online: false,
            independentStudy: false,
            creditHours: 3,
            maximumEnrollment: 22,
            seatsAvailable: -3,
            courseName: "CSCI362"
        })
    })
})