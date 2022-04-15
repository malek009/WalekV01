CREATE TABLE [dbo].[VideoCategories]
(
	[Id] INT NOT NULL PRIMARY KEY identity(1,1),
	[VideoId] INT NOT NULL,
	[CategoriesId] INT NOT NULL,
	CONSTRAINT [FK_VideoCategories_Video] FOREIGN KEY ([VideoId]) REFERENCES [dbo].[Video]([Id]),
	CONSTRAINT [FK_VideoCategories_Categories] FOREIGN KEY ([CategoriesId]) REFERENCES [dbo].[Categories]([Id])
)
