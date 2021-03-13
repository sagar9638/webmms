DELETE FROM [dbo].[MenuRights]
      WHERE [Id] = @p_Id;

SELECT SCOPE_IDENTITY() AS Id
