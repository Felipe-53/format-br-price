import t from 'tap'
import formatPrice from '../dist/index.js'

const EXPECTED_OUTPUT_1 = 'R$\xa012,27'
const EXPECTED_OUTPUT_2 = 'R$\xa00,55'

t.test('should be ok', t => {
  let input;

  input = '12.273'
  t.equal(formatPrice(input), EXPECTED_OUTPUT_1)

  input = 12.274
  t.equal(formatPrice(input), EXPECTED_OUTPUT_1)

  input = ' 12.269999'
  t.equal(formatPrice(input), EXPECTED_OUTPUT_1)

  input = .55444
  t.equal(formatPrice(input), EXPECTED_OUTPUT_2)

  t.end()
})


