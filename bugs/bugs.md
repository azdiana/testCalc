# testCalc
Bugs
=============================

**TCALC-0001**
*Summary*: No proper error handling for division by 0
*Steps to reproduce*:
- Fill '7' in val1 field
- Fill '0' in val2 field
- Select 'division'
- Click on `Calculate`
*Result*: 500 Internal server error
*Expected result*: Role alert pops up "Division by 0 is undefined."

**TCALC-0002**
*Summary*: No proper error handling for overflow of max integer of result
*Steps to reproduce*:
- Fill '2147483645' in val1 field
- Fill '255' in val2 field
- Select 'addition'
- Click on `Calculate`
*Result*: -2147483396
*Expected result*: Role alert pops up "Maximum integer value is exceeded."

**TCALC-0003**
*Summary*: No proper error handling for overflow of min integer of result
*Steps to reproduce*:
- Fill '-2147483645' in val1 field
- Fill '-255' in val2 field
- Select 'addition'
- Click on `Calculate`
*Result*: 2147483396
*Expected result*: Role alert pops up "Minimum integer value is exceeded."

**TCALC-0004A**
*Summary*: No proper error handling for input values
*Steps to reproduce*:
- Fill '' in val1 field
- Fill '-255' in val2 field
- Select 'addition'
- Click on `Calculate`
*Result*: 500 Internal server error
*Expected result*: Role alert pops up "Invalid data input."

**TCALC-0004B**
*Summary*: No proper error handling for input values
*Steps to reproduce*:
- Fill 'qwe' in val1 field
- Fill '-255' in val2 field
- Select 'addition'
- Click on `Calculate`
*Result*: 500 Internal server error
*Expected result*: Role alert pops up "Invalid data input."

**TCALC-0004C**
*Summary*: No proper error handling for input values
*Steps to reproduce*:
- Fill '2147483648' in val1 field
- Fill '-255' in val2 field
- Select 'addition'
- Click on `Calculate`
*Result*: 500 Internal server error
*Expected result*: Role alert pops up "Integer value is exceeded."

**TCALC-0004D**
*Summary*: No proper error handling for input values
*Steps to reproduce*:
- Fill '-255' in val1 field
- Fill '-2147483649' in val2 field
- Select 'addition'
- Click on `Calculate`
*Result*: 500 Internal server error
*Expected result*: Role alert pops up "Integer value is exceeded."

**TCALC-0005**
*Summary*: No proper error handling for operation
*Steps to reproduce*:
- Fill '-255' in val1 field
- Fill '33' in val2 field
- Delete `checked` property from 'addition'
- Click on `Calculate`
*Result*: 500 Internal server error
*Expected result*: Role alert pops up "Operation must not be null."



