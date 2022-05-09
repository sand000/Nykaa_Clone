function pay() {
      return `  <p>CHOOSE PAYMENT METHOD</p>

            <div id="paymentContainer">
                  <div id="cardOption">
                        <p>Credit/Debit Card</p>
                        <div class="hr"></div>
                        <p>UPI</p>
                        <div class="hr"></div>
                        <p>Google Pay</p>
                        <div class="hr"></div>
                        <p>Net Banking</p>
                        <div class="hr"></div>
                        <p>Mobile Wallet</p>
                        <div class="hr"></div>
                        <p>Cash on Delivery</p>
                        <div class="hr"></div>
                        <p>Gift Card</p>
                  </div>
                  <div id="card">
                        <p>Credit/Debit Card</p>
                        <div class="hr"></div>
                        <p>Card number</p>
                        <input type="text">
                        <p>Expiry</p>
                        <div id="expiry">
                              <input type="month">
                              <input type="passward" placeholder="CVV" style="width:15%">
                        </div>
                        <div class="hr"></div>
                        <p>last 3 digits at <br>the back of <br> the card</p>
                        <input type="checkbox"> <label for="checkbox">save this card for future</label><br>
                        <button id="payNow">  <a href="./thanks.html">Pay Now</a></button>
                  </div>
                  <div id="payment1">
                        <div id="cartTotal"></div>
                        <div id="address12"></div>
                        
                  </div>
            </div>
            `;
}
export { pay };
