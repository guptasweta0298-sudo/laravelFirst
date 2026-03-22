@include('template.header')
<div class="container">
  <div class="form-container">
    <h3 class="text-center mb-4">Register</h3>
    <form id="registerForm">
      <div class="mb-3">
        <label for="fullname" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="fullname" name="fullname">
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" name="email">
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" name="password">
         <a href="javascript:void(0)" id="showpassword"><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
      </div>

        <div class="mb-3">
        <label for="cpassword" class="form-label">Confirm Password</label>
        <input type="password" class="form-control" id="cpassword" name="cpassword">
      </div>

      <div class="d-grid">
        <button type="submit" class="btn btn-primary">Register</button>
      </div>
    </form>
  </div>
</div>
@include('template.footer')
