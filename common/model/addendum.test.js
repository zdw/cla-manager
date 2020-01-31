import { Addendum, AddendumType } from './addendum'
import { User } from './user'

describe('The Addendum model', () => {
  let model
  let signer
  let contributor1
  let contributor2
  beforeEach(() => {
    signer = new User('John', 'john@onf.dev', 'john-onf')
    contributor1 = new User('Emma', 'emma@onf.dev', 'emma-onf')
    contributor2 = new User('Gigi', 'gigi@onf.dev', 'gigi-onf')

    model = new Addendum(
      AddendumType.CONTRIBUTOR,
      'aabb',
      signer,
      [contributor1],
      [contributor2]
    )
  })
  it('should correctly instantiate the class', () => {
    expect(model.type).toEqual('contributor')
    expect(model.agreementId).toEqual('aabb')
    expect(model.signer).toEqual(signer)
    expect(model.added).toEqual([contributor1])
    expect(model.removed).toEqual([contributor2])
    console.log(model.dateSigned, model.dateSigned instanceof Date)
    expect(model.dateSigned instanceof Date).toBe(true)
  })
})
