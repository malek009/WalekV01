CREATE TABLE [dbo].[User]
(
	[Id] INT NOT NULL PRIMARY KEY identity,
    [Name] NVARCHAR(50) NOT NULL, 
    [Email] NVARCHAR(256) NOT NULL, 
    [Password] NVARCHAR(MAX) NOT NULL,
    [Salt] NVARCHAR(MAX) NOT NULL, 
    [Age] INT NOT NULL, 
    [ZipCode] NVARCHAR(150) NULL, 
    [Contry] NVARCHAR(150) NULL, 
	[RoleId] int not null
    Constraint UQ_USER_EMAIL unique (Email),
	
	constraint FK_USER_ROLE foreign key (RoleId) references [dbo].[Role](Id)
	
	
)
