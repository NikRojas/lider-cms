<?php

use Illuminate\Database\Seeder;

class CredentialsPaymentGateway extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('credentials_payment_gateway')->insert([
        [ 
            'user' => '55991870',
            'password_test' => 'testpassword_qDVpksQS5V8IU5c3tdMXTMaJ46EvbXt5OTsgNe9Avz0Je',
            'password_prod' => 'testpassword_qDVpksQS5V8IU5c3tdMXTMaJ46EvbXt5OTsgNe9Avz0Je',
            'token_js_test' => '55991870:testpublickey_6rABS8CI1N5PHtUR5zvUeQg1XYhysUOk6A9YjtvS80qli',
            'token_js_prod' => '55991870:testpublickey_6rABS8CI1N5PHtUR5zvUeQg1XYhysUOk6A9YjtvS80qli',
            'token_sha_256_test' => 'aCrr58VZ5yA3dRFL0STlff5HYmEEflqn6TeRhBldE8I9f',
            'token_sha_256_prod' => 'aCrr58VZ5yA3dRFL0STlff5HYmEEflqn6TeRhBldE8I9f',
            'active' => false,
            'project_id' => 5,
            'type_currency' => 0
        ],
            [ 'user' => '27946283',
            'password_test' => 'testpassword_n7yeMOhUznLwzBnwPWvswMRB2mzGbZqklBtBLVZaOfT7D',
            'password_prod' => 'prodpassword_jjS4ksTEKLg6Izt6MkAF0bEI5mWig88b1GIW4fhRZTUYb',
            'token_js_test' => '27946283:testpublickey_oSsXoTce6lvP4IwskOdxE1BMhbdxsztGyNJK2NDIXGmzw',
            'token_js_prod' => '27946283:publickey_PvFpKIntzGFunqtNL3IKzfH5PLx8wspC2L5yV9x84Dmn7',
            'token_sha_256_test' => '9wWbSN0Rst8eOVcOt3fanc9hrQxNhvwL8Qq5KbPR1yZsZ',
            'token_sha_256_prod' => 'lOPU7uRdCruAAga6uaqQMUQezYJyaG6j6u4aHx3jVHAs7',
            'active' => false,
            'project_id' => 4,
            'type_currency' => 0
        ],
            [ 'user' => '82173317',
            'password_test' => 'testpassword_bqvZCiRdO1ztzaQ2bGmPtqRbxpRWkexjVXzcnbnWW15n6',
            'password_prod' => 'prodpassword_oa8DmKXwqkaXIE4YMtzuVdnzmjMj0R3DT2DB1CNDFX7dC',
            'token_js_test' => '82173317:testpublickey_4fOLO2DN6Jyb9YU85D4xQ7RuviINt7If70Ef19KCTwuUz',
            'token_js_prod' => '82173317:publickey_POJosOMu0WTVaAuqwdUACk3YFWlOsZ850hWGlD2X6BjbN',
            'token_sha_256_test' => '13ee7QTBcc8d0q8MKD2OfMAdwDQuxgT8MNbzsjXZ51Ohv',
            'token_sha_256_prod' => 'NugfBQ5cXKBoVcj1iH3Z404MmGv2k4V9WsCjLgHY38ANl',
            'active' => false,
            'project_id' => 3,
            'type_currency' => 1
        ],
            [ 'user' => '37674502',
            'password_test' => 'testpassword_P6SmfX7PsaYiNziszwfPmcOzzZtLCAGqd6dVvQg9yGZPc',
            'password_prod' => 'prodpassword_PnZXI9SStAamXIzmKgFDSQtMBb4OE0jXBpbLbUrE98DqM',
            'token_js_test' => '37674502:testpublickey_EPevCqBS8Yww7j4mYNq504SyzxqUsj515zLN872xADWgB',
            'token_js_prod' => '37674502:publickey_B8AkJATI50eomvq2JsKF5ejg1vu0VrMGDksJpqY2tGB3Q',
            'token_sha_256_test' => '9qdCKYoRrkf4dVevOHAbERZH1wmOVH9bKdV0nTZt8OXSb',
            'token_sha_256_prod' => 'W7gx3bjHRlfY3X7ztKROOqni6NeVc5CAsL6eJTFUma0Qu',
            'active' => false,
            'project_id' => 10,
            'type_currency' => 1
        ],
            [ 'user' => '45155370',
            'password_test' => 'testpassword_O0eCV6ms7wLjitPYpfxTCgn3Im9OOeXTamkvwsUZraUl6',
            'password_prod' => 'prodpassword_10Fu4dJIRmm3KDXGrQeCgVTNuCmU6F9Ab4DGWrcyXyXTi',
            'token_js_test' => '45155370:testpublickey_HGFPpxgnUZp7MNwYViIe4OB30z0ItyH6muN1asJsNywI4',
            'token_js_prod' => '45155370:publickey_pV5bjFhXiqJICYSOONXwnUqwRm7viT1DTGHcghsMG5mny',
            'token_sha_256_test' => 'ye0tGTVxKdsWBA7HA3odU5vnoO3HiX861BpVX73vzvOiA',
            'token_sha_256_prod' => 'ntWRFq2sPYd76Xu9gH4I5aNXo22CCu37kwuVM6jpfqKTO',
            'active' => false,
            'project_id' => 6,
            'type_currency' => 1
        ],
            [ 'user' => '31757937',
            'password_test' => 'testpassword_PfopbGw1BWU7s3ovao2hI06ZeTnOL8oxR2QZxE7iTmXuR',
            'password_prod' => 'prodpassword_jdLAEPrFS1gglINmntkE1ktStYh9WInUfXyO40bB2V3Td',
            'token_js_test' => '31757937:testpublickey_cjZBq16kdipIWnX3NhAN8hLjhLe8cCweu0DN8ggkTGE2Z',
            'token_js_prod' => '31757937:publickey_0KnRWRScmRxJDOH1Mu7KIEAo9J3kGQ7cxZxPrQXAXVCJr',
            'token_sha_256_test' => '7QpaAuvPfZKoLHVcgzRZGv20tdgFItuaWOXGPrnBXypqL',
            'token_sha_256_prod' => '55XMzJCfeKXuOvnQoM6V306bjYtnkfkZPJ9Kq1WFU5lpt',
            'active' => false,
            'project_id' => 1,
            'type_currency' => 1
        ],
            [ 'user' => '66108055',
            'password_test' => 'testpassword_4tXIYEdsC4FYW3I9hnUzccckterHD87zNqzmGL2QITZFU',
            'password_prod' => 'prodpassword_xOzjWXDpq6o8hXGIt2bKVo3IChXTuFAAGCVuOWKrfHRel',
            'token_js_test' => '66108055:testpublickey_xdIErCRJLr5w0ESXhVTBvWCh0zSLGyQwckhuKcKRfExhh',
            'token_js_prod' => '66108055:publickey_APEBVoJkrVFBU8r41uzIlzBGMszRae916xExIc9kBbapI',
            'token_sha_256_test' => 'L9UZPgEpvIGPoXlJsTMoaD7EnfEE2s7GoSSfepBkhekZB',
            'token_sha_256_prod' => 'Q5n33vQx7h3FLN2SsBBSyglCdqIj87yCiKzb1kXDni5FV',
            'active' => false,
            'project_id' => 2,
            'type_currency' => 1
        ],
            [ 'user' => '90870178',
            'password_test' => 'testpassword_GpQ5YOMEFBqWLZUiCWcXmanJiZBcJzHeuKGd8FMxjlrKv',
            'password_prod' => 'prodpassword_6kPZOCeJuzNjR0zyMZdcZSpdoxrIAaRdjwmxsj0m6xxej',
            'token_js_test' => '90870178:testpublickey_kWIBjWttneKbU5mp6szvEWPOCFWWY3CA4FwtO5W6Y8Td9',
            'token_js_prod' => '90870178:publickey_yhJX49CczeTaGNSaFJilqQ4eKkkEXe7NWYnLdBxr1O8Yg',
            'token_sha_256_test' => 'zy3pZ7jSvyyd7s89eiBA6PICSeC55Nyl9fa2CWQXpqwhs',
            'token_sha_256_prod' => 'sVEoAkOFs1EEbInilwNXEBMMnWeVOHdyx1zBVBS83FDGl',
            'active' => false,
            'project_id' => 9,
            'type_currency' => 1
        ],
            [ 'user' => '91270595',
            'password_test' => 'testpassword_5BDniCd8zEbiG5eokOCdrCWbbCmXciOcqdJ0hQJDzg4cA',
            'password_prod' => 'prodpassword_mqVlscxSvmQFAG3w2NHXJadBvy9QUkxBUYrMChadt5tXO',
            'token_js_test' => '91270595:testpublickey_J0oTqEdirvKKXD2e8JxYgcWMGyrQj31HZWjWCj4XAw26d',
            'token_js_prod' => '91270595:publickey_cpHlZJPQvfFCklLmrS5xaN7NF37a0xxGOR73YxdVXklqC',
            'token_sha_256_test' => '1Rz8mNZpCp4ITD1KZb9pxRb2sOxebm4SkKovN0eM8orh8',
            'token_sha_256_prod' => 'Nl72OAwMeqlHgLh9Px9U4cwynG0q1xdw1N5AF9UROPpgb',
            'active' => false,
            'project_id' => 7,
            'type_currency' => 1
        ],
            [ 'user' => '33858194',
            'password_test' => 'testpassword_fPLYOQDecjY0YrpxFJRtawzHdO7RQLfRl1O1J7M4Exnkt',
            'password_prod' => 'prodpassword_4Ha56vQCnHiZ8rShh4lVRLcG5R7YpnnH1MrFHLvHWWvpi',
            'token_js_test' => '33858194:testpublickey_ICKsFgiwsoCI5DNooUHXUVLL7mL3FkxQnF9Vhy9VfkOqd',
            'token_js_prod' => '33858194:publickey_bN5nsNuhIxH0e6acJlOsCRqQDurFvdSEShMXJFjDlJuoZ',
            'token_sha_256_test' => 'fPjmeOAo1iivWOsuDaGMHODkkS4qL94l4lY0U7zDMEQgi',
            'token_sha_256_prod' => '21HMg2XpuwFBknys0gc1LNjOsZ6E96OnyA92VXpp5nGOA',
            'active' => false,
            'project_id' => 8,
            'type_currency' => 1
            ]
        ]);
    }
}
