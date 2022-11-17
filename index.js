const cors = require('cors');

const path = require('path')

const express = require('express');

const app = express();

const swaggerJSDoc = require('swagger-jsdoc')

const swaggerUi = require('swagger-ui-express')

const { connection } = require('./model/connection')

app.use(cors())
const port = 5000;
app.use(express.json())

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server started on http://localhost:${port}`)
    }
})

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node JS API Project for mysql',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:5000/'
            }
        ]
    },
    apis: ['./index.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
 
/**
 * @swagger
 * /:
 *  get:
 *      summary:  This api is use to check if get method is working or not
 *      description: This api is use to check if get method is working or not
 *      responses:
 *         200:
 *              description: To test Get method
 */

/**
 * @swagger
 *  components:
 *     schema:
 *         userRegistrationAuction:
 *              type: object
 *              properties:
 *                  user_id:
 *                         type: string
 *                  Full_Name:
 *                         type: string
 *                  Email:
 *                         type: string
 *                  gender:
 *                         type: string
 *                  password:
 *                         type: string
 *                  mobile:
 *                         type: string
 *                  Address:
 *                         type: string
 *                  status:
 *                         type: string
 *                  Registration_date:
 *                         type: string
 *                  last_update:
 *                         type: string
 */

/**
 * @swagger
 * /userregistrationget:
 *  get:  
 *      summary: To get all user from mysql
 *      description: This api is used to fetch data from mysql
 *      responses:
 *          200:
 *               description: this api is use to fetch data from mysql
 *               content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/userRegistrationAuction'
 */

/**
 * @swagger
 * /userregistrationpost:
 *  post:  
 *      summary: use to insert data to mysql
 *      description: This api is used to post data from mysql
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/userRegistrationAuction'
 *      responses:
 *          200: 
 *               description: Added Successfully
 */

/**
 * @swagger
 * /userregistrationdelete/{user_id}:
 *  delete:  
 *      summary: use to delete records from mysql
 *      description: This api is used to delete data from mysql
 *      parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      responses:
 *          200:
 *               description: Deleted Successfully
 */

/**
 * @swagger
 * /userregistrationput/{user_id}:
 *  put:  
 *      summary: used to update data to mysql
 *      description: this api is used to update data from mysql
 *      parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/userRegistrationAuction'
 *      responses:
 *          200:
 *               description: updated Successfully
 *               content:
 *                    application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/userRegistrationAuction'
 */

/////////////////////-------------------------------------------------

const { userRegistration_Router } = require('./Routes/userRegistration')
app.use('/', userRegistration_Router)

///////////////////----------------------------------------------------


/**
 * @swagger
 * /:
 *  get:
 *      summary:  This api is use to check if get method is working or not
 *      description: This api is use to check if get method is working or not
 *      responses:
 *         200:
 *              description: To test Get method
 */

/**
 * @swagger
 *  components:
 *     schema:
 *         userLoginHistoryAuction:
 *              type: object
 *              properties:
 *                  User_id:
 *                         type: string
 *                  LoginDateTime:
 *                         type: string
 *                  Logout_Time:
 *                         type: string
 */

/**
 * @swagger
 * /userloginhistoryget:
 *  get:  
 *      summary: To get all user from mysql
 *      description: This api is used to fetch data from mysql
 *      responses:
 *          200:
 *               description: this api is use to fetch data from mysql
 *               content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/userLoginHistoryAuction'
 */

/**
 * @swagger
 * /userloginhistorypost:
 *  post:  
 *      summary: use to insert data to mysql
 *      description: This api is used to post data from mysql
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/userLoginHistoryAuction'
 *      responses:
 *          200:
 *               description: Added Successfully
 */

/**
 * @swagger
 * /userloginhistorydelete/{User_id}:
 *  delete:  
 *      summary: use to delete records from mysql
 *      description: This api is used to delete data from mysql
 *      parameters:
 *       - in: path
 *         name: User_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      responses:
 *          200:
 *               description: Deleted Successfully
 */

/**
 * @swagger
 * /userloginhistoryupdate/{User_id}:
 *  put:  
 *      summary: used to update data to mysql
 *      description: this api is used to update data from mysql
 *      parameters:
 *       - in: path
 *         name: User_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/userLoginHistoryAuction'
 *      responses:
 *          200:
 *               description: updated Successfully
 *               content:
 *                    application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/userLoginHistoryAuction'
 */



const { userLoginHistory } = require('./Routes/userLoginHistory')
app.use('/', userLoginHistory)

///////////////////////------------------------------------------------

/**
 * @swagger
 * /:
 *  get:
 *      summary:  This api is use to check if get method is working or not
 *      description: This api is use to check if get method is working or not
 *      responses:
 *         200:
 *              description: To test Get method
 */

/**
 * @swagger
 *  components:
 *     schema:
 *         tradeAuction:
 *              type: object
 *              properties:
 *                  T_id:
 *                         type: string
 *                  Business_id:
 *                         type: string
 *                  Property_Details:
 *                         type: string
 *                  Auction_id:
 *                         type: string
 *                  Property_price:
 *                         type: integer
 *                  base_Price:
 *                         type: integer
 *                  Trade_from:
 *                         type: integer
 *                  trade_to:
 *                         type: integer
 */

/**
 * @swagger
 * /tradeget:
 *  get:  
 *      summary: To get all user from mysql
 *      description: This api is used to fetch data from mysql
 *      responses:
 *          200:
 *               description: this api is use to fetch data from mysql
 *               content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/tradeAuction'
 */

/**
 * @swagger
 * /tradepost:
 *  post:  
 *      summary: use to insert data to mysql
 *      description: This api is used to post data from mysql
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/tradeAuction'
 *      responses:
 *          200:
 *               description: Added Successfully
 */

/**
 * @swagger
 * /tradedelete/{T_id}:
 *  delete:  
 *      summary: use to delete records from mysql
 *      description: This api is used to delete data from mysql
 *      parameters:
 *       - in: path
 *         name: T_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      responses:
 *          200:
 *               description: Deleted Successfully
 */

/**
 * @swagger
 * /tradeupdate/{T_id}:
 *  put:  
 *      summary: used to update data to mysql
 *      description: this api is used to update data from mysql
 *      parameters:
 *       - in: path
 *         name: T_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/tradeAuction'
 *      responses:
 *          200:
 *               description: updated Successfully
 *               content:
 *                    application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/tradeAuction'
 */

const { trade } = require('./Routes/trade')
app.use('/', trade)


///////////////////////-----------------------------------------------

/**
 * @swagger
 * /:
 *  get:
 *      summary:  This api is use to check if get method is working or not
 *      description: This api is use to check if get method is working or not
 *      responses:
 *         200:
 *              description: To test Get method
 */

/**
 * @swagger
 *  components:
 *     schema:
 *         roleAssignAuction:
 *              type: object
 *              properties:
 *                  user_id:
 *                         type: string
 *                  Role_id:
 *                         type: string
 */

/**
 * @swagger
 * /roleassignget:
 *  get:  
 *      summary: To get all user from mysql
 *      description: This api is used to fetch data from mysql
 *      responses:
 *          200:
 *               description: this api is use to fetch data from mysql
 *               content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/roleAssignAuction'
 */

/**
 * @swagger
 * /roleassignpost:
 *  post:  
 *      summary: use to insert data to mysql
 *      description: This api is used to post data from mysql
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/roleAssignAuction'
 *      responses:
 *          200:
 *               description: Added Successfully
 */

/**
 * @swagger
 * /roleassigndelete/{user_id}:
 *  delete:  
 *      summary: use to delete records from mysql
 *      description: This api is used to delete data from mysql
 *      parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      responses:
 *          200:
 *               description: Deleted Successfully
 */

/**
 * @swagger
 * /roleassignupdate/{user_id}:
 *  put:  
 *      summary: used to update data to mysql
 *      description: this api is used to update data from mysql
 *      parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/roleAssignAuction'
 *      responses:
 *          200:
 *               description: updated Successfully
 *               content:
 *                    application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/roleAssignAuction'
 */


const { roleAssign } = require('./Routes/roleAssign')
app.use('/', roleAssign)


////////////////////////--------------------------------------------

/**
 * @swagger
 * /:
 *  get:
 *      summary:  This api is use to check if get method is working or not
 *      description: This api is use to check if get method is working or not
 *      responses:
 *         200:
 *              description: To test Get method
 */

/**
 * @swagger
 *  components:
 *     schema:
 *         roleAuction:
 *              type: object
 *              properties:
 *                  Role_id:
 *                         type: string
 *                  Role_name:
 *                         type: string
 */

/**
 * @swagger
 * /roleget:
 *  get:  
 *      summary: To get all user from mysql
 *      description: This api is used to fetch data from mysql
 *      responses:
 *          200:
 *               description: this api is use to fetch data from mysql
 *               content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/roleAuction'
 */

/**
 * @swagger
 * /rolepost:
 *  post:  
 *      summary: use to insert data to mysql
 *      description: This api is used to post data from mysql
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/roleAuction'
 *      responses:
 *          200:
 *               description: Added Successfully
 */

/**
 * @swagger
 * /roledelete/{Role_id}:
 *  delete:  
 *      summary: use to delete records from mysql
 *      description: This api is used to delete data from mysql
 *      parameters:
 *       - in: path
 *         name: Role_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      responses:
 *          200:
 *               description: Deleted Successfully
 */

/**
 * @swagger
 * /roleupdate/{Role_id}:
 *  put:  
 *      summary: used to update data to mysql
 *      description: this api is used to update data from mysql
 *      parameters:
 *       - in: path
 *         name: Role_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/roleAuction'
 *      responses:
 *          200:
 *               description: updated Successfully
 *               content:
 *                    application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/roleAuction'
 */

const { role } = require('./Routes/role')
app.use('/', role)


/////////////////////////---------------------------------------------

/**
 * @swagger
 * /:
 *  get:
 *      summary:  This api is use to check if get method is working or not
 *      description: This api is use to check if get method is working or not
 *      responses:
 *         200:
 *              description: To test Get method
 */

/**
 * @swagger
 *  components:
 *     schema:
 *         businessNameAuction:
 *              type: object
 *              properties:
 *                  user_id:
 *                         type: string
 *                  Business_id:
 *                         type: string
 *                  Business_Name:
 *                         type: string
 *                  Contact_no:
 *                         type: string
 *                  Business_register_Date:
 *                         type: string
 *                  status:
 *                         type: string
 *                  Turnover:
 *                         type: integer
 *                  Last-update:
 *                         type: string
 *                  URL:
 *                         type: string
 *                  Email:
 *                         type: string
 *                  GST:
 *                         type: string
 *                  PAN:
 *                         type: string
 *                  Address:
 *                         type: string
 *                  state:
 *                         type: string
 *                  city:
 *                         type: string
 */

/**
 * @swagger
 * /businessnameget:
 *  get:  
 *      summary: To get all user from mysql
 *      description: This api is used to fetch data from mysql
 *      responses:
 *          200:
 *               description: this api is use to fetch data from mysql
 *               content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/businessNameAuction'
 */

/**
 * @swagger
 * /businessnamepost:
 *  post:  
 *      summary: use to insert data to mysql
 *      description: This api is used to post data from mysql
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/businessNameAuction'
 *      responses:
 *          200:
 *               description: Added Successfully
 */

/**
 * @swagger
 * /businessnamedelete/{Business_id}:
 *  delete:  
 *      summary: use to delete records from mysql
 *      description: This api is used to delete data from mysql
 *      parameters:
 *       - in: path
 *         name: Business_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      responses:
 *          200:
 *               description: Deleted Successfully
 */

/**
 * @swagger
 * /businessnameupdate/{Business_id}:
 *  put:  
 *      summary: used to update data to mysql
 *      description: this api is used to update data from mysql
 *      parameters:
 *       - in: path
 *         name: Business_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/businessNameAuction'
 *      responses:
 *          200:
 *               description: updated Successfully
 *               content:
 *                    application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/businessNameAuction'
 */


const { businessName } = require('./Routes/businessName')
app.use('/', businessName)

///////////////////////////-------------------------------------------

/**
 * @swagger
 * /:
 *  get:
 *      summary:  This api is use to check if get method is working or not
 *      description: This api is use to check if get method is working or not
 *      responses:
 *         200:
 *              description: To test Get method
 */

/**
 * @swagger
 *  components:
 *     schema:
 *         biddingAuction:
 *              type: object
 *              properties:
 *                  T_id:
 *                         type: string
 *                  user_id:
 *                         type: string
 *                  datetime:
 *                         type: string
 *                  Amount:
 *                         type: integer
 *                  status:
 *                         type: string
 */

/**
 * @swagger
 * /biddingget:
 *  get:  
 *      summary: To get all user from mysql
 *      description: This api is used to fetch data from mysql
 *      responses:
 *          200:
 *               description: this api is use to fetch data from mysql
 *               content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/biddingAuction'
 */

/**
 * @swagger
 * /biddingpost:
 *  post:  
 *      summary: use to insert data to mysql
 *      description: This api is used to post data from mysql
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/biddingAuction'
 *      responses:
 *          200:
 *               description: Added Successfully
 */

/**
 * @swagger
 * /biddingdelete/{T_id}:
 *  delete:  
 *      summary: use to delete records from mysql
 *      description: This api is used to delete data from mysql
 *      parameters:
 *       - in: path
 *         name: T_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      responses:
 *          200:
 *               description: Deleted Successfully
 */

/**
 * @swagger
 * /biddingupdate/{T_id}:
 *  put:  
 *      summary: used to update data to mysql
 *      description: this api is used to update data from mysql
 *      parameters:
 *       - in: path
 *         name: T_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/biddingAuction'
 *      responses:
 *          200:
 *               description: updated Successfully
 *               content:
 *                    application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/biddingAuction'
 */

const { bidding } = require('./Routes/bidding')
app.use('/', bidding)


///////////////////////////////-----------------------------------

/**
 * @swagger
 * /:
 *  get:
 *      summary:  This api is use to check if get method is working or not
 *      description: This api is use to check if get method is working or not
 *      responses:
 *         200:
 *              description: To test Get method
 */

/**
 * @swagger
 *  components:
 *     schema:
 *         auctionTypeAuction:
 *              type: object
 *              properties:
 *                  User_id:
 *                         type: string
 *                  LoginDateTime:
 *                         type: string
 *                  Logout_Time:
 *                         type: string
 */

/**
 * @swagger
 * /auctiontypeget:
 *  get:  
 *      summary: To get all user from mysql
 *      description: This api is used to fetch data from mysql
 *      responses:
 *          200:
 *               description: this api is use to fetch data from mysql
 *               content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/auctionTypeAuction'
 */

/**
 * @swagger
 * /auctiontypepost:
 *  post:  
 *      summary: use to insert data to mysql
 *      description: This api is used to post data from mysql
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/auctionTypeAuction'
 *      responses:
 *          200:
 *               description: Added Successfully
 */

/**
 * @swagger
 * /auctiontypedelete/{Auction_id}:
 *  delete:  
 *      summary: use to delete records from mysql
 *      description: This api is used to delete data from mysql
 *      parameters:
 *       - in: path
 *         name: Auction_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      responses:
 *          200:
 *               description: Deleted Successfully
 */

/**
 * @swagger
 * /auctiontypeupdate/{Auction_id}:
 *  put:  
 *      summary: used to update data to mysql
 *      description: this api is used to update data from mysql
 *      parameters:
 *       - in: path
 *         name: Auction_id
 *         required: true
 *         description: Numerical ID required
 *         schema:
 *            type: integer
 *      requestBody:
 *          required: true
 *          content: 
 *             application/json:
 *                          schema:
 *                             $ref: '#components/schema/auctionTypeAuction'
 *      responses:
 *          200:
 *               description: updated Successfully
 *               content:
 *                    application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                               $ref: '#components/schema/auctionTypeAuction'
 */

const { auctionType } = require('./Routes/auctionType')
app.use('/', auctionType)

