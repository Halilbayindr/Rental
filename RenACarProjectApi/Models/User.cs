﻿using System;
namespace RenACarProjectApi.Models;

public class User
{

	public int  UserId { get; set;}
	public string Username { get; set; }
	public string Password { get; set; }
	public string? Email { get; set; }
	public bool IsAdmin { get; set; } = false;
}

